import React, { Component } from 'react'
import { func } from 'prop-types'
import SendIcon from 'react-icons/lib/fa/paper-plane-o'
import cx from 'classnames'

const buttonClasses = ({ message }) => cx({
    active: message.length > 1
})

class ChatInput extends Component {
    constructor (props) {
        super(props)

        this.state = {
            message: ''
        }

        this.typingMessage = this.typingMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    typingMessage (e) {
        this.setState({
            message: e.target.value,
            who: 'me',
        })
    }

    handleSubmit (e) {
        e.preventDefault()

        if (!this.state.message) return

        this.props.onSubmit(Object.assign({}, this.state))

        this.setState({
            message: ''
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.typingMessage}
                    value={this.state.message}
                    type="textarea"
                />

                <button
                    type="submit"
                    className={buttonClasses({ message: this.state.message })}
                >
                    <div>
                        <SendIcon /> <span>Send</span>
                    </div>
                </button>

                <style jsx="true">{`
                    form {
                        margin-left: 1em;
                        margin-right: 1em;
                        display: flex;
                    }

                    input {
                        width: 100%;
                        border: 1px solid #67995c;
                        padding: 0.5em 1em;
                        border-radius: 4px;
                    }

                    button {
                        padding: 0.5em 1em;
                        border: 0;
                        background: none;
                        color: #fff;
                        margin-left: 1em;
                        background-color: #67995c; 
                        font-weight: bold;
                        cursor: pointer;
                        border-radius: 4px;
                    }

                    .active {
                        background-color: #347F28;
                    }

                    button:hover {
                        background-color: silver;
                    }

                    button div {
                        display: flex;
                    }

                    button span {
                        margin-left: 0.5em;
                    }
                `}</style>
            </form>
        )
    }
}

ChatInput.propTypes = {
    onSubmit: func.isRequired,
}

export default ChatInput