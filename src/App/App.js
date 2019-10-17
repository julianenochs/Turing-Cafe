import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(response => this.setState({reservations: response}))
  }

  addReservation = (newReservation) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(newReservation),
      headers: {
        "Content-type": "application/json"
      }
    }
    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(response => response.json())
      .then(() => this.setState({ reservations: [...this.state.reservations, newReservation] }))
  }

  cancelReservation = (id) => {
    const removeReservation = this.state.reservations.filter(reservation => {
      return reservation.id === id
    })
    const options = {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json"
      }
    }
    fetch(`http://localhost:3001/api/v1/reservations/:${id}`, options)
      .then(response => response.json())
      // .then(() => this.setState({ reservations: removeReservation }))
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
