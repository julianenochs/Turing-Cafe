import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './Form';

describe('Form', () => {
    let wrapper
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

    it('should call addReservation when the button is clicked', () => {
        wrapper = mount(<Form
            name={mockName}
            date={mockDate}
            time={mockTime}
            number={mockNumber}
            addReservation={mockAddReservation} />)
        wrapper.find('button').simulate('click');
        expect(wrapper.props().addReservation).toHaveBeenCalled();
    });

    it('should reset the state to default settings when clearInputs is called', () => {
        wrapper.instance().clearInputs
        expect(wrapper.state().name).toEqual('');
        expect(wrapper.state().date).toEqual('');
        expect(wrapper.state().time).toEqual('');
        expect(wrapper.state().number).toEqual(0);
    });
});