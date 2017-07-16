# Exercise 11 - Creating a simple chat server with socket.io

### Reference
- https://socket.io/get-started/chat/

### Socket Methods

```
// sending to sender-client only
socket.emit('message', "this is a test");

// sending to all clients, include sender
io.emit('message', "this is a test");

// sending to all clients except sender
socket.broadcast.emit('message', "this is a test");

// sending to all clients in 'game' room(channel) except sender
socket.broadcast.to('game').emit('message', 'nice game');

// sending to all clients in 'game' room(channel), include sender
io.in('game').emit('message', 'cool game');

// sending to sender client, only if they are in 'game' room(channel)
socket.to('game').emit('message', 'enjoy the game');

// sending to all clients in namespace 'myNamespace', include sender
io.of('myNamespace').emit('message', 'gg');

// sending to individual socketid
socket.broadcast.to(socketid).emit('message', 'for your eyes only');
```

### Tech Story

- Create a chat server that can house unlimited number of users.
- Create a client that can send and receive messages
- For simplicity, should be on the same namespace (default)

### Tech Approach

#### Define CLIENT Actions
1. `join chat` - Join chat app and send nickname. NOTE: It doesn't mean that when you are connected to the socket server, you have already joined the chat.
2. `send message` - send message to SERVER
3. `exit chat` - Exit chat app.


#### Define SERVER Actions
1. `update` - Send update (not chat message) to users
2. `chat` - Send chat to users

### UAC
- Demo that you can send messages using the chat server
- Demo that you can receive messages using the chat server

### Challenges
- [x] Send chat to specific person/client only (private messaging)
- [x] Add nickname
- [x] Broadcast newly connected user
- [x] Show online users
- [x] Display 'You' if you are the sender