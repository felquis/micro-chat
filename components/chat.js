import React, { Component } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import cx from 'classnames'

const messageClasses = ({ who }) => cx('message', 'message-' + who)

class Chat extends Component {
    render () {
        const { messages } = this.props

        return (
            <div>
                <div className="container">
                    <ul className="chat-container">
                        {messages.map(({ message, id, who }) => (
                            <li
                                className={messageClasses({ who })}
                                key={id}
                            >
                                <i className="message-avatar" />
                                <span className="message-body">{message}</span>
                            </li>
                        ))}
                    </ul>
                </div>
        
                <style jsx="true">{`
                    .container {
                        width 100%;
                        margin 0 auto;
                        border-radius 5px;
                        padding-bottom: 60px;
                    }
        
                    .chat-container {
                        height auto;
                        transform rotate(180deg);
                        direction rtl;
                        list-style: none;
                        padding: 0;
                    }
        
                    .message {
                        padding 0.5em 0px;
                        transform rotate(180deg);
                        direction ltr;
                        display: flex;
                    }
        
                    .message-other .message-body {
                        background-color: #65985d;
                        border-radius: 0px 4px 4px 4px;
                    }
        
                    .message-body {
                        background-color: #65985d;
                        padding: 0.5em;
                        color: #fff;
                        position: relative;
                    }
        
                    .message-body:before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 0px;
                        height: 0px;
                        border-bottom: 12px solid green;
                        border-bottom-color: rgba(0,0,0,0);
                        border-top-width: 0px;
                        border-left: 0px solid #000;
                        border-right: 15px solid #65985d;
                        transform: translateX(-15px);
                    }
        
                    .message-avatar {
                        background: silver;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: block;
                        margin-right: 1em;
                        background-image: url('static/cool-avatar.jpg');
                        background-size: cover;
                    }
        
                    .message-me {
                        flex-direction: row-reverse;
                    }
                    
                    .message-me .message-avatar {
                        background-image: url('static/maggie.gif')
                    }

                    .message-me .message-body {
                        background-color: #347F28;
                        border-radius: 4px 0 4px 4px;
                    }
        
                    .message-me .message-avatar {
                        margin-right: 0;
                        margin-left: 1em;
                    }
        
                    .message-me .message-body:before {
                        left: auto;
                        right: 0;
                        transform: translateX(15px);
                        
                        border-bottom: 12px solid green;
                        border-bottom-color: rgba(0,0,0,0);
                        border-top-width: 0px;
                        border-right: 0px solid #000;
                        border-left: 15px solid #347F28;
                    }
                `}</style>
            </div>
        )
    }
}

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