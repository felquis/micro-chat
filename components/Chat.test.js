import React from 'react'
import { mount } from 'enzyme'

import Chat from './Chat'

import buildMessage from '../helpers/buildMessage'

describe('<Chat />', () => {
    it('should render three messages', () => {
        const component = mount(<Chat messages={[
            buildMessage({ message: 'Hello' }),
            buildMessage({ message: 'Where is the party?' }),
            buildMessage({ message: 'I\'ll be there at 9pm' })
        ]} />)

        expect(component.find('li')).toHaveLength(3)
    })
})