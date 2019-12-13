var msgBox = $('.chatlogs');
var wsUri = "ws://192.168.228.189:2010/sockets/server.php";
websocket = new WebSocket(wsUri);

// Message received from server
websocket.onmessage = function(ev) {
    var response 		= JSON.parse(ev.data); //PHP sends Json data
    var res_type 		= response.type; //message type
    var user_name 		= response.name; //user name
    var user_message 	= response.message; //message text
    if(user_message != null){
    if(user_name == '<?php echo $_SESSION['user'] ?>'){
        msg='<div class="chat self">'+
            '<div class="user-photo"> <img src="imagenes/Captura1.PNG" alt=""></div>'+
            '<p class="chat-message">'+ user_message +'</p>'+
            '</div>';
    }else{
        msg='<div class="chat friend">'+
            '<div class="user-photo"> <img src="imagenes/Captura.PNG" alt=""></div>'+
            '<p class="chat-message">'+ user_message +'</p>'+
            '</div>';
    }}


    switch(res_type){
        case 'usermsg':
            msgBox.append(msg);
            break;
        case 'system':
            msgBox.append('<div style="color:#bbbbbb;margin-left:30%;">' + user_message + '</div>');
            break;
    }
    msgBox[0].scrollTop = msgBox[0].scrollHeight; //scroll message

};

websocket.onerror	= function(ev){ msgBox.append('<div class="system_error">Error Occurred - ' + ev.data + '</div>'); };
websocket.onclose 	= function(ev){ msgBox.append('<div class="system_msg">Connection Closed</div>'); };

//Message send button
$('#send-message').click(function(){
    send_message();
});

//User hits enter key
$( "#message" ).on( "keydown", function( event ) {
if(event.which==13){
    send_message();
}
});

//Send message
function send_message(){
    var message_input = $('#message'); //user message text

    if(message_input.val() == ""){ //emtpy message?
        alert("Enter Some message Please!");
        return;
    }

    //prepare json data
    var msg = {
        message: message_input.val(),
        name: '<?php echo($_SESSION['user'])?>'
    };
    //convert and send data to server
    websocket.send(JSON.stringify(msg));
    message_input.val(''); //reset message input
	}