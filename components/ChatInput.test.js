import React from 'react'
import { mount } from 'enzyme'
import ChatInput from './ChatInput'

describe('<ChatInput />', () => {
    it('should render with no warnings', () => {
        const onSubmit = jest.fn()
        const component = mount(<ChatInput onSubmit={onSubmit} />)

        component.find('input').simulate('change', { target: { value: 'Hello from Planet Earth' } })
        component.find('form').simulate('submit')

        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toHaveBeenLastCalledWith({ message: 'Hello from Planet Earth' })
    })
})
