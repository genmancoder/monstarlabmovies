import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#121212",
    zIndex:100
  },
});

export default function MainNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if(value === 0) history.push('/')      
    else if (value === 1) history.push('/movies')
    else if (value === 2) history.push('/series')
    else if (value === 3) history.push('/favorite')
  }, [value,history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
      style={{color: "white"}}
      label="Trending" 
      icon={<WhatshotIcon />}         
      />
      <BottomNavigationAction 
      style={{color: "white"}}
      label="Movies" 
      icon={<MovieIcon />}         
      />
      <BottomNavigationAction 
      style={{color: "white"}}
      label="TV Series" 
      icon={<TvIcon />}         
      />
      <BottomNavigationAction 
      style={{color: "white"}}
      label="Favorite" 
      icon={<FavoriteIcon />}         
      />
    </BottomNavigation>
  );
}