// SearchResults.js
import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';
import Paper from '@mui/material/Paper'; // Import Paper component
import Typography from '@mui/material/Typography'; // Ensure Typography is imported

function SearchResults() {
  return (
    <Paper className="search-results" elevation={0} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: '16px', marginBottom: '24px' }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'white' }} className="search-results-title">
        Search Results
      </Typography>
      <TrackList />
    </Paper>
  );
}

export default SearchResults;
