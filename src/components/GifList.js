import React from 'react';

const GifList = ({ gifs }) => {
  return (
    <ul>
      {gifs.map((gif, index) => (
        <li key={index}>
          <img src={gif} alt={`GIF ${index}`} />
        </li>
      ))}
    </ul>
  );
};

export default GifList;
