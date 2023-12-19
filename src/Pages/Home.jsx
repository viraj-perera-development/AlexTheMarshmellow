import React, { useEffect, useState } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

function Home() {
  const [currentGoodIndex, setCurrentGoodIndex] = useState(null);
  const [currentBedIndex, setCurrentBedIndex] = useState(null);

  const imagesGood = [img3, img1, img2];
  const imagesBed = [image3, image1, image2];

  const handleGoodButtonClick = () => {
    setCurrentBedIndex(null);
    setCurrentGoodIndex((prevIndex) => (prevIndex + 1) % imagesGood.length);  
  };

  const handleBedButtonClick = () => {
    setCurrentGoodIndex(null);
    setCurrentBedIndex((prevIndex) => (prevIndex + 1) % imagesBed.length);
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ height: '85vh' }}>
      <div className="container my-auto">

        <div className="row d-flex justify-content-center align-items-center text-center flex-grow-1">
          <div className="col">
            <h1 style={{"font-size":"2.6rem"}}>Do you like marshmallow?</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center flex-grow-1" style={{ height: '50vh' }}>
          {currentGoodIndex !== null && (
            <>
              <img src={imagesGood[currentGoodIndex]} className="img-fluid" alt={`Good Image ${currentGoodIndex + 1}`} />
            </>
          )}
          {currentBedIndex !== null && (
            <>
              <img src={imagesBed[currentBedIndex]} className="img-fluid" alt={`Bed Image ${currentBedIndex + 1}`} />
            </>
          )}
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6 text-center">
            <button className="rounded-pill shadow text-uppercase px-4 fs-1 btn bg-info text-light bg-opacity-50" onClick={handleGoodButtonClick}>
              Yes ❤️
            </button>
          </div>
          <div className="col-6 text-center">
            <button className="rounded-pill shadow text-uppercase px-4 fs-1 btn bg-danger bg-opacity-50 text-light" onClick={handleBedButtonClick}>
              No 💔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
