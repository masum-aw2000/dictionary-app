/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


const Phonetic = ({ phonetic}) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  return (
    <div className='phonetic-container'>
      {<p className="phonetic-text">{phonetic.text}</p>}
      {phonetic.audio && (
        <div className="audio-container">
          <audio ref={audioRef} src={phonetic.audio}></audio>
          <button className="play-button" onClick={handlePlay}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Phonetic;
