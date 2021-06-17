import React, { useEffect, useRef, useState } from 'react';
import { io } from "socket.io-client";


const CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "http://localhost:8080";


const Socket = () => {
    const socket = io(SOCKET_SERVER_URL);
    socket.on('connection', (socket) => {
        console.log('connected to backend', socket)
        
    })
    socket.on(CHAT_MESSAGE_EVENT, (message) => {
        console.log('on chat sent',message)
    })

    const sendMessage = (message) => {
        console.log('sendMessage socket.js', message)
        socket.emit(CHAT_MESSAGE_EVENT, {
            text: message,
            senderId: socket.id
        })
    }
    return sendMessage
}


export default Socket;
