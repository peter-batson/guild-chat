const Message = (props) => {
    return (
        <li
            key={props.message.id}
            className="message"
        >
            {props.message.text}
        </li>
    )
}

export default Message;