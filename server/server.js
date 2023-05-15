const WebSocket = require('ws');

const PORT = 3000;
const server = new WebSocket.Server({ 
  port: PORT
});

server.on('connection', function connection(socket) {
  console.log('Nova conexão estabelecida');

  socket.on('message', function incoming(message) {
      console.log(`Mensagem recebida: ${message}`);

      socket.send(message);
  });

  socket.on('close', function close() {
    console.log('Conexão encerrada');
  });
});
