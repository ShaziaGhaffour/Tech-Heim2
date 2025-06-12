import React from 'react';
import './PromoCard.css';

import circle1 from './../../../../public/image 187.svg';
const PromoCard = () => {
  return (
    <div className="new-products-adds-container">
      <div className="iphone15-series-container">
        <img className="circle-1" src={circle1} alt="circle 1" />
       <div className="svg-circles">
  <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.5" cx="59" cy="59" r="49" transform="rotate(-90 59 59)" stroke="white" strokeWidth="20" />
  </svg>
  <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.5" cx="59" cy="59" r="49" transform="rotate(-90 59 59)" stroke="white" strokeWidth="20" />
  </svg>
</div>

        <div className="heading">iPhone <span>15 Series</span></div>
        <div className="iphone15-series-right-content">
          <div className="days-container">
            {[...Array(4)].map((_, i) => (
              <div className="day-card" key={i}>
                <div className="number">8</div>
                <div className="day">Days</div>
              </div>
            ))}
          </div>
          <p className="heading">It feels good to be the first</p>
          <div className="para">
            Get ready for the future of smartphones. Experience innovation like never
            before. Stay tuned for the big iPhone 15 pre-sale.
          </div>
          <button className="btn">Register Now</button>
        </div>
      </div>

      <div className="play-station-5">
        <div className="heading">Play Station 5</div>
        <div className="ps-heading">Digital Edition + 2TB</div>
        <div className="btn">Buy Now</div>
      </div>
    </div>
  );
};

export default PromoCard;

