import { Component } from 'react'

class ChatInput extends Component {
    constructor (props) {
        super(props)

        this.state = {
            message: ''
        }

        this.typingMessage = this.typingMessage.bind(this)
    }

    typingMessage (e) {
        this.setState({
            message: e.target.value
        })
    }

    render () {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
        
                this.props.onSubmit(Object.assign({}, this.state))

                this.setState({
                    message: ''
                })
            }}>
                <input
                    onChange={this.typingMessage}
                    value={this.state.message}
                    type="textarea"
                />

                <button
                    type="submit"
                    type="button"
                >Enviar</button>

                <style jsx>{`
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

export default ChatInput