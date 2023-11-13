import React from 'react';
import './Carousel.css';
import useFetchData from '@/hooks/useFetchData';
import CircleRating from '../circleRating/CircleRating';

const Carousel = () => {
  const { data, loading } = useFetchData('/movie/744857/similar');
  const url = 'https://image.tmdb.org/t/p/original';
  console.log(data);
  return (
    <div className="carouselItems">
      {data?.results.map((el) => {
        if (el.backdrop_path != null)
          return (
            <>
              <div className="carouselItem">
                <div className="poster">
                  <span>
                    <img src={url + el.poster_path} alt="" className="image" />
                  </span>
                  <div className="cicleRating">
                    <CircleRating rating={el.vote_average} />
                  </div>
                  <div className="geners">
                    <div className="gener"></div>
                    <div className="gener"></div>
                  </div>
                </div>

                <div className="textposter">
                  <div className="title">{el.title}</div>
                  <div className="date">{el.release_date}</div>
                </div>
              </div>
            </>
          );
      })}
    </div>
  );
};

export default Carousel;
