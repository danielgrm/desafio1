const { time } = require('console');

const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');

const httpServer = require('http').createServer((req, res) => {
  // serve the index.html file
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(content));
  res.end(content);
});

const io = require('socket.io')(httpServer);


//aqui eu escuto e digo no console que conectou
io.on('connection', socket => {
        console.log('connectou');
  });

  //aqui eu recebo o timestamp eprinto no console
  io.on('connection', socket => {
    socket.on('hey', data => {
        socket.emit('hello', data);
      console.log('hey', data);
    });
    //   socket.emit('hello');

  });
 

httpServer.listen(3000, () => {
  console.log('go to http://localhost:3000');
});