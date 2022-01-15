import { nanoid } from 'nanoid'

export default ({ message, who } = {}) => ({
    message: message || 'Hello from Planet Earth',
    id: nanoid(),
    who: who || 'other'
})