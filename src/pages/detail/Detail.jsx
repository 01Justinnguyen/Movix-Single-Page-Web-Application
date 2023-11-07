import React from 'react';
import './detail.css';

const Detail = () => {
  return (
    <>
      <div className="contentWrapper">
        <div className="posterFallback">
          <div className="content">
            <div className="left">
              <img
                src="https://image.tmdb.org/t/p/original/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg"
                alt=""
                className="posterImg"
              />
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
