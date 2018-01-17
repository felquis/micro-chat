const Chat = (props) => (
    <div>
        <div className="messages">
            <ul className="message-list">
                {props.messages.map(({ message }) => (
                    <li key={message}>{message}</li>
                ))}
            </ul>

            <MessageInput />
        </div>

        <style jsx>{`
            .messages {
                width: 20em;
            }

            .message-list {
                min-height: 10em;
                background-color: #f3f3f3;
            }

            .alignRight {
                text-align: right;
            }
        `}</style>
    </div>
)

const MessageInput = () => (
    <div className="message-input">
        <input type="text" />
        <button type="button">Enviar</button>
    </div>
)

export default Chat