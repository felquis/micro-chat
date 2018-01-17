import { Component } from 'react'
import shortid from 'shortid'

import ChatInput from '../components/ChatInput'
import Chat from '../components/Chat'

const buildMessage = ({ message } = {}) => ({
    message: message || 'Hello from Planet Earth',
    id: shortid.generate()
})

class Container extends Component {
    constructor (props) {
        super(props)

        this.state = {
            messages: []
        }

        this.onChatSubmit = this.onChatSubmit.bind(this)
    }

    componentDidMount () {
        setInterval(() => {
            this.setState({
                messages: [buildMessage(), ...this.state.messages]
            })
        }, 1500)
    }

    onChatSubmit ({ message }) {
        this.setState({
            messages: [buildMessage({ message }), ...this.state.messages]
        })
    }

    render () {
        return (
            <div>
                <Chat
                    messages={this.state.messages}
                />

                <ChatInput onSubmit={this.onChatSubmit} />
            </div>
        )
    }
}

export default Container