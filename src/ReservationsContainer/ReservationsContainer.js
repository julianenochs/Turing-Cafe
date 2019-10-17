import React from 'react';
import Reservations from '../Reservations/Reservations';
import './ReservationsContainer.css';

const ReservationsContainer = ({reservations, cancelReservation}) => {
    const allReservations = reservations.map(reservation => {
        return <Reservations 
            key = {reservation.id}
            id = {reservation.id}
            name = {reservation.name}
            date = {reservation.date}
            time = {reservation.time}
            number = {reservation.number}
            cancelReservation = {cancelReservation}
        />
    })
    return(
        <section className='reservation__container'>
            {allReservations}
        </section>
    )
}

export default ReservationsContainer;