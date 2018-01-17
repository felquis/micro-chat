import shortid from 'shortid'

export default ({ message } = {}) => ({
    message: message || 'Hello from Planet Earth',
    id: shortid.generate()
})