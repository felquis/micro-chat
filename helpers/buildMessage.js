import shortid from 'shortid'

export default ({ message, who } = {}) => ({
    message: message || 'Hello from Planet Earth',
    id: shortid.generate(),
    who: who || 'other'
})