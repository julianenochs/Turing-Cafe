import React from 'react';
import Reservations from '../Reservations/Reservations';

const ReservationsContainer = (props) => {
    const allReservations = props.reservations.map(reservation => {
        return <Reservations 
            key = {reservation.id}
            id = {reservation.id}
            name = {reservation.name}
            date = {reservation.date}
            time = {reservation.time}
            number = {reservation.number}
        />
    })
    return(
        <section>
            {allReservations}
        </section>
    )
}

export default ReservationsContainer;