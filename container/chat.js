import { Component } from 'react'
import Chat from '../components/chat'

const newRamdomMessage = () => 'Hello from Planet Earth' 

class Container extends Component {
    constructor (props) {
        super(props)

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                messages: [...this.state.messages, newRamdomMessage()]
            })
        }, 800)
    }

    render () {
        return (
            <Chat messages={this.state.messages} />
        )
    }
}

export default Container