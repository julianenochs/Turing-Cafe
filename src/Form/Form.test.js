import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
    const wrapper
    let mockAddReservation = jest.fn();
    let mockName = 'Julian'
    let mockDate = '2019/10/13'
    let mockTime = '11:00pm'
    let mockNumber = 3
    beforeEach(() => {
        wrapper = shallow(<Form 
                    name={mockName}
                    date={mockDate}
                    time={mockTime}
                    number={mockNumber}
                    addReservation={mockAddReservation} />)
    });
    it('should match the snapshot with all of the data passed through', () => {
        expect(wrapper).toMatchSnapshot();
    });
})