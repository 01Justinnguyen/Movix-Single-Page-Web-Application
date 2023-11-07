import React from 'react';
import './detail.css';
import TopCast from '../detail/topCast/TopCast';
import Videos from '../detail/officialVideos/Videos';
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
            <div className="right">
              <div className="title">Five Nights at Freddy's (2023)</div>
              <div className="subtitle">Can you survive five nights?</div>
              <div className="genres">
                <div className="genre bg-pink">Horror</div>
                <div className="genre bg-pink">Mystery</div>
              </div>
              <div className="row"></div>
              <div className="overview">
                <div className="heading">Overview</div>
                <div className="description">
                  Recently fired and desperate for work, a troubled young man
                  named Mike agrees to take a position as a night security guard
                  at an abandoned theme restaurant: Freddy Fazbear's Pizzeria.
                  But he soon discovers that nothing at Freddy's is what it
                  seems.
                </div>
              </div>
              <div className="info">
                <div className="infoItem">
                  <span className="text bold">Status:</span>
                  <span className="text">Released</span>
                </div>
                <div className="infoItem">
                  <span className="text bold">Release Date:</span>
                  <span className="text">Oct 25, 2023</span>
                </div>
                <div className="infoItem">
                  <span className="text bold">Runtime:</span>
                  <span className="text">1h 50m</span>
                </div>
              </div>
              <div className="info">
                <div className="infoItem">
                  <span className="text bold">Director:</span>
                  <span className="text">Emma Tammi</span>
                </div>
              </div>
              <div className="info">
                <div className="infoItem">
                  <span className="text bold">Writer:</span>
                  <span className="text">
                    Seth Cuddeback, Emma Tammi, Scott Cawthon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TopCast />
        </div>
        <div>
          <Videos />
        </div>
      </div>
    </>
  );
};

export default Detail;
