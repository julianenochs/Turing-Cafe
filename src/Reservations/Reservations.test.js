import React from 'react';
import { shallow } from 'enzyme';
import Reservations from './Reservations';

describe('Reservations', () => {
    let wrapper;
    let mockCancelReservation = jest.fn()
    beforeEach(() => {
        wrapper = shallow(<Reservations 
                    key={3}
                    id={3}
                    name={'Julian'}
                    date={'2019/10/14'}
                    time={'11:00pm'}
                    number={3}
                    cancelReservation={mockCancelReservation}
                    />)
    });

    it('should match the snapshot with all of the data passed through', () => {
        expect(wrapper).toMatchSnapshot();
    });
});