import React from 'react'
import { mount } from 'enzyme'

jest.useFakeTimers()

import Chat from './Chat'

describe('<Chat />', () => {
    it('should write three messages after 4500ms', () => {
        const component = mount(<Chat />)

        jest.advanceTimersByTime(4500)

        expect(component.state('messages')).toHaveLength(3)
    })
})