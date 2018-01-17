import React, { Component } from 'react'
import { func } from 'prop-types'

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
            message: e.target.value
        })
    }

    handleSubmit (e) {
        e.preventDefault()

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
                    type="button"
                >Enviar</button>

                <style jsx="true">{`
                    form {
                        width: 100%;
                        display: flex;
                    }

                    input {
                        width: 100%;
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