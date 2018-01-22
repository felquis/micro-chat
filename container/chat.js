import React, { Component, Fragment } from 'react'

import ChatInput from '../components/ChatInput'
import Chat from '../components/Chat'

import buildMessage from '../helpers/buildMessage'

class Container extends Component {
    constructor (props) {
        super(props)

        this.state = {
            messages: []
        }

        this.onChatSubmit = this.onChatSubmit.bind(this)
    }

    addMessage (message) {
        this.setState({
            messages: [message, ...this.state.messages]
        })
    }

    componentDidMount () {
        this.welcome()
    }

    welcome() {
        setTimeout(() => {
            this.addMessage(buildMessage({ message: "Hello" }))
        }, 1500)

        setTimeout(() => {
            this.addMessage(buildMessage({ message: "How can I help you?" }))
        }, 2500)
    }

    onChatSubmit (message) {
        this.setState({
            messages: [buildMessage(message), ...this.state.messages]
        })
    }

    render () {
        return (
            <div className="root">
                <div className="chat-container">
                    <Chat
                        messages={this.state.messages}
                    />

                    <ChatInput onSubmit={this.onChatSubmit} />
                </div>

                <style jsx="true">{`
                    .root {
                        display: flex;
                        justify-content: center;
                        margin: 0 0.5em;
                    }

                    .chat-container {
                        max-width: 550px;
                        width: 100%;
                    }
                `}</style>
            </div>
        )
    }
}

export default Container