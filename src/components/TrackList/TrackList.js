import React from 'react';
import './TrackList.css';
import List from '@mui/material/List';
import Track from '../Track/Track';

function Tracklist() {
  return (
    <List className="tracklist">
      {/* Render Track components here */}
      <Track />
      <Track />
      {/* Add more Track components as needed */}
    </List>
  );
}

export default Tracklist;