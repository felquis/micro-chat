const Chat = (props) => (
    <div>
        <div className="container">
            <ul className="chat-container">
                {props.messages.map(({ message, id }) => (
                    <li className="message" key={id}>{message}</li>
                ))}
            </ul>
        </div>

        <style jsx>{`
            .container {
                width 400px;
                margin 0 auto;
                border solid 1px #ccc;
                border-radius 5px;
                overflow hidden;
            }

            .chat-container {
                height 400px;
                overflow auto;
                transform rotate(180deg);
                direction rtl;
                overflow: hidden;
                overflow-y: scroll;
            }

            .message {            
                border-bottom solid 1px #ccc;
                padding 20px;
                transform rotate(180deg);
                direction ltr;
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

export default Chat