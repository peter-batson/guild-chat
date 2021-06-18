import { useState } from 'react';
import Socket from './Socket.js'
import Message from './Message';
import './Chat.css';

const Chat = () => {

    const {sendMessage, messages} = Socket();
    const [newMessage, setNewMessage] = useState('');
    const messageArray = messages.map((message, i) => {
        return ( <Message message={message}/> )
    })


    const messageInput = (e) => {
        setNewMessage(e.target.value)
    }

    const emitNewMessage = () => {
        sendMessage(newMessage)
        setNewMessage('');
    }


    return (
        <div>
            <div className="chat__room">
                <h1 className="chat__room__header">Guild Support</h1>
                <ul>
                    {messageArray}
                </ul>
            </div>
            <div className="chat__input">
                <textarea type="text"
                className="chat__input__textarea"
                value={newMessage}
                onChange={messageInput} />
                <button onClick={emitNewMessage} className="chat__input__button">Send</button>
            </div>
        </div>
    
    )
}

export default Chat;
