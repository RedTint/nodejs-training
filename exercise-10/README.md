# Exercise 10 - Using socket.io

### Socket.io

Enables real-time bidirectional event-based communication.
It works on every platform, browser or device, focusing equally on reliability and speed.

#### Features

- Binary streaming - it's possible to send any blob back and forth: image, audio, video.
- Instant messaging and chat - hello world in just a few lines of code
- Document collaboration - allows users to concurrently edit a document and see each other's chagnes
- Real-time analytics - push data to clients that gets represented as real-time counters, charts or logs

#### Socket.io Basics

```
io.on('connection', function(socket){
  socket.emit('request', /* */); // emit an event to the socket 
  io.emit('broadcast', /* */); // emit an event to all connected sockets 
  socket.on('reply', function(){ /* */ }); // listen to the event 
});
```

### Tech Story

- Create a server that can be subscribed to that emits data every N seconds.
- Create a client that subscribes to socket.io server.

### Assumptions

- Data would come from a mock data provided

### UAC
- Demo that server emits a record every one second
- Demo that client receives emitted record


