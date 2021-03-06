/*
 * @filename client.js
 * @description defines the client actions
 */

let isReady = false;
let username = null;
let sendTo = null;

/*******************************
 * SOCKETS
 *******************************/

let socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('You are connected to http://localhost:3000');
})

socket.on('disconnect', () => {
    console.log('You are disconnected from http://localhost:3000');
});

socket.on('update', message => {
    if (isReady) {
        // append latest message
        $('#messages').append(`<div>${message}</div>`);
    }
});

socket.on('chat', message => {
    if (isReady) {
        // display 'You' if same user
        message.who = message.who === username ? 'You': message.who;
        $('#messages').append(`<div><b>${message.who}:</b> ${message.message}`);
    }
});

socket.on('update people', people => {
    $('#member-list').empty();

    // Insert 'Everyone' selection
    $('#member-list').append(`<a href="#" data-id="">Everyone</a>`);

    // Insert 'people' selection
    for(let id in people) {
        if (people.hasOwnProperty(id)) {
            $('#member-list').append(`
                <a href="#" data-id="${id}">${people[id]}</a>
            `);
        }
    }

    // Bind on click to people
    $('#member-list a').on('click', function() {
        sendTo = $(this).data('id');
    });
});

/*******************************
 * UI/UX
 *******************************/
// bind buttons once window has fully loaded
$(window).on('load', () => {

    // For joining / exiting chat
    $('#join-chat-btn').on('click', () => {
        // join chat if not ready
        if (!isReady) {
            console.log('join chat button clicked');
            // get username
            username = $('#username').val();
            // join chat
            socket.emit('join chat', username);
            // change join chat button text to 'Exit Chat'
            $('#join-chat-btn').text('Exit Chat');
            // activate chat
            isReady = true;

        // exit chat if already joined
        } else if (isReady) {
            // exit chat
            socket.emit('exit chat');
            // change join chat button text to 'Join Chat'
            $('#join-chat-btn').text('Join Chat');
            // deactivate chat
            isReady = false;
        }
    });

    // For sending chat message
    $('#message-input-btn').on('click', () => {
        console.log('message input button clicked');
        let message = $('#message').val();
        socket.emit('send message', {
            sendTo: sendTo,
            message: message
        });
        $('#message').val('');
        $('#message').focus();
    });

})

