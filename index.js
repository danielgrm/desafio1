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
  });

  //aqui eu recebo o timestamp eprinto no console
  io.on('connection', socket => {
    socket.on('start', data => {
        socket.emit('res_start', data);
        console.log('gotstart', data);
      });
        socket.on('span', data => {
          socket.emit('res_span', data);
          console.log('gotspan', data);

let obj = {
type: 'data',
timestamp: 0,
os: 'linux',
browser: 'chrome',
min_response_time: 0.1,
max_response_time: 1.3}
obj.timestamp=data.timestamp
console.log('sending objects')
socket.emit('res_data', obj)

obj = {
  "type": "data",
  "timestamp": 0,
  "os": "linux",
  "browser": "firefox",
  "min_response_time": 0.1,
  "max_response_time": 1.0}
  obj.timestamp=data.timestamp
  socket.emit('res_data', obj)

  obj = {
    "type": "data",
    "timestamp": 0,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 1.2}
    obj.timestamp=data.timestamp
    socket.emit('res_data', obj)

    obj = {
      "type": "data",
      "timestamp": 0,
      "os": "mac",
      "browser": "firefox",
      "min_response_time": 0.3,
      "max_response_time": 1.2}
      obj.timestamp=data.timestamp
      socket.emit('res_data', obj)

      setTimeout(() => {
        obj = {
          "type": "data",
          "timestamp": 0,
          "os": "mac",
          "browser": "chrome",
          "min_response_time": 0.1,
          "max_response_time": 1.0}
          obj.timestamp=data.end
          socket.emit('res_data', obj)

          obj = {
            "type": "data",
            "timestamp": 0,
            "os": "mac",
            "browser": "firefox",
            "min_response_time": 0.2,
            "max_response_time": 1.1}
            obj.timestamp=data.end
            socket.emit('res_data', obj)

    obj = {
      "type": "data",
      "timestamp": 0,
      "os": "linux",
      "browser": "chrome",
      "min_response_time": 0.2,
      "max_response_time": 0.9}
      obj.timestamp=data.end
      socket.emit('res_data', obj)

      obj = {
        "type": "data",
        "timestamp": 0,
        "os": "linux",
        "browser": "firefox",
        "min_response_time": 0.3,
        "max_response_time": 1.4}
        obj.timestamp=data.end
        socket.emit('res_data', obj)
        

      }, 6000);


    });
    socket.on('stop', data => {
      socket.emit('res_stop', data);
  console.log('gotstop', data);
});

  });
 

httpServer.listen(3000, () => {
  console.log('go to http://localhost:3000');
});