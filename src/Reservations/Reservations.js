import React from 'react';
import './Reservations.css';

const Reservations = ({key, id, name, date, time, number}) => {
    return(
        <section className='reservation__card'>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
        </section>
    )
}
export default Reservations;