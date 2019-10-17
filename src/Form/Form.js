import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <section className='form__section'>
                <input 
                    type='text'
                    name='name'
                    // value={}
                    placeholder='Name'/>
                <input
                    type='date'
                    name='name'
                    // value={}
                    placeholder='Date' />
                <input
                    type='time'
                    name='name'
                    // value={}
                    placeholder='Time' />
                <input
                    type='text'
                    name='name'
                    // value={}
                    placeholder='Number of Guests' />
                <button>Make Reservation</button>
            </section>
        )
    }
}

export default Form;