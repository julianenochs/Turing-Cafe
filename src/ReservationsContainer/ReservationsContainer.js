import React from 'react';
import Reservations from '../Reservations/Reservations';

const ReservationsContainer = (props) => {
    props.reservations.map(reservation => {
        return <Reservations 
            key = {reservation.number}
            id = {reservation.id}
            name = {reservation.name}
            date = {reservation.date}
            time = {reservation.time}
            number = {reservation.number}
        />
    })
    return(
        <section>
            
        </section>
    )
}

export default ReservationsContainer;