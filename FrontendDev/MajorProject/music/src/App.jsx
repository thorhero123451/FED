import React, { useState } from "react";
import { audios } from "./AudioData";
import Player from "./components/Player";

const App = () => {
  const [songs, setSongs] = useState(audios);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  const checkNumber = (number) => {
    if (number > songs.length - 1) {
      return 0;
    }
    if (number < 0) {
      return songs.length - 1;
    }
    return number;
  };

  const getSongData = (song, index) => {
    setCurrentIndex(index);
    setCurrentSong(song);
  };

  const nextSong = () => {
    setCurrentIndex((currentIndex) => {
      let newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });

    setCurrentSong(audios[currentIndex]);
  };

  const prevSong = () => {
    setCurrentIndex((currentIndex) => {
      let newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });

    setCurrentSong(audios[currentIndex]);
  };

  return (
    <>
      <div className="player-main">
        <Player
          currentSong={currentSong}
          currentIndex={currentIndex}
          nextSong={nextSong}
          prevSong={prevSong}
        />
      </div>
    </>
  );
};

export default App;