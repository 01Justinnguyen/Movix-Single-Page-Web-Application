import React from 'react';
import './TopCast.css';

const TopCast = () => {
  return (
    <div className="caseSection">
      <div className="heading">Top Cast</div>
      <div className="listItems">
        <div className="listItem">
          <div className="profice">
            <img
              src="https://image.tmdb.org/t/p/original/npowygg8rH7uJ4v7rAoDMsHBhNq.jpg"
              alt=""
            />
          </div>
          <div className="name">Josh Hutcherson</div>
          <div className="character">Mike</div>
        </div>
        <div className="listItem">
          <div className="profice">
            <img
              src="https://image.tmdb.org/t/p/original/npowygg8rH7uJ4v7rAoDMsHBhNq.jpg"
              alt=""
            />
          </div>
          <div className="name">Josh Hutcherson</div>
          <div className="character">Mike</div>
        </div>
      </div>
    </div>
  );
};

export default TopCast;
