import React from 'react';
import './TopCast.css';
import useFetchData from '@/hooks/useFetchData';

const TopCast = () => {
  const { data, loading } = useFetchData('/movie/744857/credits');
  const url = 'https://image.tmdb.org/t/p/original';
  console.log(data);
  return (
    <div className="caseSection">
      <div className="heading">Top Cast</div>
      <div className="listItems">
        {data?.cast.map((el) => {
          return (
            <>
              <div className="listItem">
                <div className="profice">
                  <img src={url + el.profile_path} alt="" />
                </div>
                <div className="name">{el.name}</div>
                <div className="character">{el.character}</div>
              </div>
            </>
          );
        })}

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
