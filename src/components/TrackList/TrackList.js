import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

function Tracklist() {
  return (
    <div className="tracklist">
      {/* Render Track components here */}
      <Track />
      <Track />
      {/* Add more Track components as needed */}
    </div>
  );
}

export default Tracklist;
