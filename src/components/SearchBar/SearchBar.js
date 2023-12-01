import React from 'react';
import './SearchBar.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


function SearchBar() {
  return (
    <div>
      <TextField label="Search for a song" variant="outlined" />
      <Button variant="contained" color="primary" startIcon={<SearchRoundedIcon />}>Search</Button>
    </div>
  );
}


export default SearchBar;