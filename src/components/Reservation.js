import React, { useState } from 'react';
import './reservation.css'

function Reservation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [requests, setRequets] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGuestChange = (event) => {
    setGuests(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRequetsChange = (event) => {
    setRequets(event.target.value);
  };


  return (
    <div className='form'>
      <h1 id='text'>Bookings</h1>
      <form >

        <div class="input-container">
            <label htmlFor='name'>Name:</label> 
            <input
                className="input"
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Full Names"
                required
            />
        </div>

        <br/>

        <div class="input-container">
          <label htmlFor='email'>Email:</label>   
          <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
          />
        </div>
        <br/>

        <div class="input-container">
        <label htmlFor='name'>Number of Guests:</label>
          <input
              className="input"
              type="number"
              name="guests"
              value={guests}
              onChange={handleGuestChange}
              placeholder="Guests"
              required
          />
        </div>
        <br/>

        <div class="input-container">
          <label htmlFor='location'>Location:</label>
          
          <select
            className="input"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Choose a Restaurant</option>
            <option value="Johannesburg">Johannesburg</option>
            <option value="Cape Town">Cape Town</option>
            <option value="Durban">Durban</option>
            <option value="Bloemfontein">Bloemfontein</option>
          </select>
  
        </div>
        <br/>
      

        <div class="input-container">
          <label htmlFor='type'>Choose Reservation Type:</label>
          
          <select
            className="input"
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="">Choose Reservation Type:</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Brunch">Brunch</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
  
        </div>

        <br/>

        <div class="input-container">
          <label htmlFor='requests'>Requests:</label>   
          <input
              className="input requets"
              type="text"
              name="requests"
              value={requests}
              onChange={handleRequetsChange}
              placeholder="Requests"
              
          />
        </div>

        <div id='btn'>
          <button type="submit" >Submit</button>
        </div>
       
        

        
      </form>
    </div>
  );
}

export default Reservation;
