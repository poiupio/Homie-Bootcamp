const chatBox = $('.chatlogs');
const socketURL = "ws://192.168.228.189:2010/sockets/server.php";
const webSocket = new WebSocket(socketURL);
const sessionUser = '<?php echo($_SESSION['user'])?>';

webSocket.onmessage = recivedData => {
  const serverMessaje = JSON.parse(recivedData.data);
  const messajeType = serverMessaje.type; 
  const userName = serverMessaje.name;
  const userMessage = serverMessaje.message;

  if(!userMessage){return}

  const response = generateResponse(userName, userMessage);

  switch(messajeType){
      case 'usermsg':
          chatBox.append(response);
          break;
      case 'system':
          chatBox.append('<div style="color:#bbbbbb;margin-left:30%;">' + userMessage + '</div>');
          break;
    }
    
    chatBox[0].scrollTop = chatBox[0].scrollHeight;
};

$('#send-message').click = (){
  sendMessage();
});

$("#message" ).onKeydown = recivedDataent => {
  if(recivedDataent.which == 13){
    sendMessage();
  }
});

const sendMessage = () => {
  const messageInput = $('#message'); 
  const message = messageInput.val();
  
  if(isEmpty(message)){ 
    alert("Enter Some message Please!");
    return;
  }
  
  const selfData = {
    message: message,
    name: 
  };
  
  webSocket.send(JSON.stringify(selfData));
  messageInput.val('');
}

const generateResponse = (userName, userMessage) => {
  let response = "";
  
  if(userName == sessionUser){
    response='<div class="chat self">'+
    '<div class="user-photo"> <img src="imagenes/Captura1.PNG" alt=""></div>'+
    '<p class="chat-message">'+ userMessage +'</p></div>';
  }else{
    response='<div class="chat friend">'+
    '<div class="user-photo"> <img src="imagenes/Captura.PNG" alt=""></div>'+
    '<p class="chat-message">'+ userMessage +'</p>'+
    '</div>';
  }
  
  return response;
}  

webSocket.onerror	= recivedData => { chatBox.append('<div class="system_error">Error Occurred - ' + recivedData.data + '</div>'); };

webSocket.onclose = recivedData => { chatBox.append('<div class="system_msg">Connection Closed</div>'); };

const video = img => { document.querySelector('#miImg').src = img; }