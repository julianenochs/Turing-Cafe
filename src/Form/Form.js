import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: 0
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submitReservation = (e) => {
        const { addReservation } = this.props;
        const newReservation = { ...this.state, id: Date.now() };
        addReservation(newReservation);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({ name: '', date: '', time: '', numberOfGuests: 0 })
    }

    render() {
        return(
            <section className='form__section'>
                <input 
                    className='form__element'
                    type='text'
                    name='name'
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder='Name'/>
                <input
                    className='form__element'
                    type='date'
                    name='date'
                    onChange={this.handleChange}
                    value={this.state.date}
                    placeholder='Date' />
                <input
                    className='form__element'
                    type='time'
                    name='time'
                    onChange={this.handleChange}
                    value={this.state.time}
                    placeholder='Time' />
                <input
                    className='form__element'
                    type='number'
                    name='number'
                    onChange={this.handleChange}
                    value={this.state.number}
                    placeholder='Number of Guests' />
                <button onClick={this.submitReservation}>Make Reservation</button>
            </section>
        )
    }
}