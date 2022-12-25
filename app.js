const express = require("express");
const { WebSocketServer } = require("ws");
const app = express();



app.use(express.static("public"))
app.listen(8000, ()=> {
    console.log("Example app listening on port 8000")
});


const wss = new WebSocketServer({port :8001})


wss.on("connection" , (ws,request) => {
    //request => 클라이언트로부터 전송된 Http GET 리퀘스트 정보 
    ws.on("message", data => {
        console.log(`received from user :${data}`)
        ws.send(`Received ${data}`) // 서버의 답장
    })
    
    ws.send(`hellow local server come in, ${request.socket.remoteAddress}`);

})