import React, { useState } from 'react';
import './reservation.css'

function Reservation() {
  const [name, setName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <form className='form'>
        
        <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Full Names"
            required
        />

        <br/>
        <input
            type="email"
            name="email"
            value={name}
            onChange={handleNameChange}
            placeholder="Email"
            required
        />

        <br/>
        <input
            type="email"
            name="email"
            value={name}
            onChange={handleNameChange}
            placeholder="Email"
            required
        />
        <br/>
        <select
          id="myDropdown"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">Choose a Restaurant</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reservation;
