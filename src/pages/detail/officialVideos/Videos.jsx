import React from 'react';
import './Videos.css';
import useFetchData from '@/hooks/useFetchData';
import { useParams } from 'react-router-dom';
import Playbtn from '../Playbtn';

const Videos = () => {
  const { data, loading } = useFetchData('/movie/744857/videos');
  const { id } = useParams();
  // console.log(id);
  console.log(data);
  return (
    <div className="officialVideo">
      <div className="heading">Official Videos</div>
      <div className="videos">
        {data?.results.map((el) => {
          return (
            <>
              <div className="videoItem">
                <div className="videoThumbnail">
                  <div className="playBtn hover:text-pink">
                    <Playbtn />
                  </div>
                  <span className="">
                    <img
                      className="thumbnail"
                      src={`https://img.youtube.com/vi/${el.key}/mqdefault.jpg`}
                    />
                  </span>
                </div>
                <div className="videoTitle">
                  My Universal Story: Emily Poulliard
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
