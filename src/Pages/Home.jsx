import React, { useState } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

function Home() {
  const [counterLeft, setCounterLeft] = useState(4);
  const [counterRight, setCounterRight] = useState(0);

  const imgSequenceLeft = [img1, img2, img3];
  const imgSequenceRight = [img4, img5, img6];

  const handleFlip = (direction) => {
    if (direction === 'left') {
      setCounterLeft((counterLeft) => (counterLeft + 1) % imgSequenceLeft.length);
      console.log(imgSequenceLeft[counterLeft]);
    } else if (direction === 'right') {
      setCounterRight((prevCounter) => (prevCounter + 1) % imgSequenceRight.length);
      console.log(imgSequenceLeft[counterRight]);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="flip-image-container text-center">
        <h1 className="title mb-4">Do you like Marshmallow?</h1>
        <div className={`image-container ${'flipped'}`}>
          <div className="image-front">
            <img src={imgSequenceLeft[counterLeft]} className="img-fluid w-75" alt="Front Image" />
          </div>
          <div className="image-back">
            <img src={imgSequenceRight[counterRight]} className="img-fluid w-75" alt="Back Image" />
          </div>
        </div>
        <div className="buttons-container mt-4">
          <button className="btn btn-primary mr-2" onClick={() => handleFlip('left')}>
            YES
          </button>
          <button className="btn btn-primary" onClick={() => handleFlip('right')}>
            NO
          </button>
        </div>
        <p>Counter (Left): {counterLeft}</p>
        <p>Counter (Right): {counterRight}</p>
      </div>
    </div>
  );
}

export default Home;
