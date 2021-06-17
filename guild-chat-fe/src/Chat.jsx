import { useState, useEffect } from 'react';
import Socket from './Socket.js'

const Chat = () => {

    let messages = [{text: 'test message 1'}, {text: 'test message 2'}]
    const messageArray = messages.map((message, i) => {
        return ( <li
            className="message"
        >
            {message.text}
        </li> )
    })

    const [newMessage, setNewMessage] = useState('');
    const sendMessage = Socket();

    const messageInput = (e) => {
        setNewMessage(e.target.value)
    }

    const emitNewMessage = () => {
        console.log('emit msg', newMessage)
        sendMessage(newMessage)
        messages = [...messages, {text: newMessage}]
        console.log('messages', messages)
        setNewMessage('');
    }


    return (
        <div>
            <div className="chat__room">
                <h1>This is a chat application</h1>
                <ul>
                    {messageArray}
                </ul>
            </div>
            <div className="chat__input">
                <textarea type="text"
                value={newMessage}
                onChange={messageInput} />
                <button onClick={emitNewMessage} className="chat__input__button">Send</button>
            </div>
        </div>
    
    )
}

export default Chat;
