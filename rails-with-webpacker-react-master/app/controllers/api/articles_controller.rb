class Api::ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    params[:page] ||= 1
    params[:per_page] ||= 2

    @articles = Article.all.paginate(page: params[:page], per_page: params[:per_page]).order(created_at: :desc)

    @number_articles = Article.count
    @number_pages = @number_articles / params[:per_page].to_f

    render json: {
      articles: @articles,
      number_pages: @number_pages,
      current_page: params[:page]
    }
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      render json: @article, status: :ok
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    head :no_content
  end
  
  private
    def article_params
      params.require(:article).permit(:title, :content)
    end
end
