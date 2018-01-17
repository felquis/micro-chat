import React from 'react'
import { arrayOf, shape, string } from 'prop-types'

const Chat = (props) => (
    <div>
        <div className="container">
            <ul className="chat-container">
                {props.messages.map(({ message, id }) => (
                    <li className="message" key={id}>{message}</li>
                ))}
            </ul>
        </div>

        <style jsx="true">{`
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
        `}</style>
    </div>
)

Chat.propTypes = {
    messages: arrayOf(shape({
        message: string,
        id: string,
    })),
}

Chat.defaultProps = {
    message: [],
}

export default Chat