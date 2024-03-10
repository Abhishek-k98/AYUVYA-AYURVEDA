import React, { useState } from 'react';
import './Card.css'; 
import img from './Images/five.jpg';
import img1 from './Images/four.png';

const ShadowCard = () => {
  const [thumbsUpSelected, setThumbsUpSelected] = useState(false);
  const [thumbsDownSelected, setThumbsDownSelected] = useState(false);

  const handleThumbsUpClick = () => {
    setThumbsUpSelected(!thumbsUpSelected);
    setThumbsDownSelected(false);
  };

  const handleThumbsDownClick = () => {
    setThumbsDownSelected(!thumbsDownSelected);
    setThumbsUpSelected(false);
  };

  return (
    <div className="shadow-card">
      <button className="close-button"><strong>X</strong></button>
      <div className="header">
        <h1>Leave a review</h1>
      </div>
      <div className='safety my-4'>
      <h5>Safety</h5>
      <p>Card paragraph content goes here.</p>
      <img src={img} alt="Card Image"  className='Image'/>
      </div>
      <div className='communication my-2'>
      <h5>Communication</h5>
      <p>Section paragraph content goes here.</p>
      <img src={img1} alt="Section Image" className='Image' />
      </div>
      <div className='communication my-4'>
      <h5>Would you recommend Trausti?</h5>
      <p>Another section paragraph content goes here.</p>
      <div className="thumbs-section">
        <button
          className={`thumbs-button ${thumbsUpSelected ? 'selected' : ''}`}
          onClick={handleThumbsUpClick}
        >
          Thumbs Up
        </button>
        <button
          className={`thumbs-button ${thumbsDownSelected ? 'selected' : ''}`}
          onClick={handleThumbsDownClick}
        >
          Thumbs Down
        </button>
        </div>
      </div>
    </div>
  );
};

export default ShadowCard;
