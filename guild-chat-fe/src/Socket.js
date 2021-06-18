import { useEffect, useState } from 'react';
import { io } from "socket.io-client";


const CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "http://localhost:8080";


const Socket = () => {

    const [messages, setIncomingMessage] = useState([])
    const socket = io(SOCKET_SERVER_URL);

    useEffect(() => {
        socket.on('connection', (socket) => {
            console.log('connected to backend', socket)
            
        })
        socket.on(CHAT_MESSAGE_EVENT, (message) => {
            // this is where I would handle parsing the sender from the receiver
            setIncomingMessage((messages) => [...messages, message])
        })
    
    }, [])
    const sendMessage = (message) => {
        socket.emit(CHAT_MESSAGE_EVENT, {
            text: message,
            senderId: socket.id
        })
    }
    return {sendMessage, messages}
}


export default Socket;
