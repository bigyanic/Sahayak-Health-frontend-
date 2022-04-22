import React from 'react'
import "https://npm-scalableminds.s3.eu-central-1.amazonaws.com/@scalableminds/chatroom@master/dist/Chatroom.js"
import "https://npm-scalableminds.s3.eu-central-1.amazonaws.com/@scalableminds/chatroom@master/dist/Chatroom.css"
function Chatbox() {
  return (
    <div class="chat-container">
 

 <script type="text/javascript">
    var chatroom = new window.Chatroom({
      {host: "http://localhost:5005",
      title: "Chat with Mike",
      container: document.querySelector(".chat-container"),
      welcomeMessage: "Hi, I am Mike. How may I help you?",
      speechRecognition: "en-US",
      voiceLang: "en-US"}
    });
    chatroom.openChat();
  </script>

    </div>
  )
}

export default Chatbox