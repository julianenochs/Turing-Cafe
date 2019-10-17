import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            numberOfGuests: 0
        }
    }

    componentDidMount() {

    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        return(
            <section className='form__section'>
                <input 
                    type='text'
                    name='name'
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder='Name'/>
                <input
                    type='date'
                    name='date'
                    onChange={this.handleChange}
                    value={this.state.date}
                    placeholder='Date' />
                <input
                    type='time'
                    name='time'
                    onChange={this.handleChange}
                    value={this.state.time}
                    placeholder='Time' />
                <input
                    type='number'
                    name='numberOfGuests'
                    onChange={this.handleChange}
                    value={this.state.numberOfGuests}
                    placeholder='Number of Guests' />
                <button>Make Reservation</button>
            </section>
        )
    }
}