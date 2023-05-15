const WebSocket = require('ws');

const PORT = 3000;
const server = new WebSocket.Server({ 
  port: PORT
});

server.on('connection', function connection(socket) {
  console.log('Nova conexão estabelecida');

  socket.on('message', function incoming(message) {
    console.log(`Mensagem recebida: ${message}`);

    const messageString = message.toString('utf8');
   
    const data = new Date(+(new Date()) - Math.floor(Math.random()*10000000000)).toLocaleDateString("pt-BR");
    
    const object = { 
      nome: messageString, 
      data: data,
      value: Math.floor(Math.random() * 10),
    };

    const result = {
      object: object,
    };

    const json = JSON.stringify(result);
    socket.send(json);
  });

  socket.on('close', function close() {
    console.log('Conexão encerrada');
  });
});
