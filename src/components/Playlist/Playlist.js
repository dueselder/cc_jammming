import React from 'react';
import './Playlist.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tracklist from '../TrackList/TrackList';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'; // Ensure Typography is imported

function Playlist() {
  return (
    <Paper className="playlist" elevation={0} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'white' }} className="playlist-title">
        My Playlist
      </Typography>
      <TextField 
        fullWidth 
        size="small" 
        label="New Playlist" 
        variant="outlined" 
        sx={{ 
          marginBottom: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // More opaque for better visibility
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // Adds a border color for the TextField
            },
            '&:hover fieldset': {
              borderColor: 'white', // Adds a border color for the TextField on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white', // Adds a border color for the TextField when focused
            },
          },
        }} 
      />
      <Tracklist />

      <Button 
        variant="contained" 
        color="primary"
        sx={{ marginY: 2 }}
      >
        SAVE TO SPOTIFY
      </Button>
    </Paper>
  );
}

export default Playlist;
