import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router';
import {useSelector} from 'react-redux'

import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#161b22",
    zIndex:999
  },
});

export default function MainNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const favorites = useSelector((state) => state.favoriteReducer)

  useEffect(() => {
    if(value === 0) {history.push('/')}      
    else if (value === 1) {history.push('/search') }   
    else if (value === 2) {
      window.scroll(0,0)
      history.push('/favorite')
    }
  }, [value,history,favorites])

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
      label="Search" 
      icon={<SearchIcon />}         
      />  
      <BottomNavigationAction 
      style={{color: "white"}}
      label={`Favorite (${favorites.length})`} 
      icon={<FavoriteIcon />}         
      />
    </BottomNavigation>
  );
}