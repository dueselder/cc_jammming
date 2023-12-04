import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

function Track(isRemoval) {
  return (
    <ListItem className="track">
      <ListItemText primary="Track Title" secondary="Artist | Album" />
      <Button 
        variant="contained" 
        className={isRemoval ? 'button-remove' : 'button-add'}
        sx={{ marginLeft: 1 }} // Add left margin for spacing
      >
        Add
      </Button>
    </ListItem>
  );
}

export default Track;