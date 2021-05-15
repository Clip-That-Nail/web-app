import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles({
    tabs: {
      width: "100%",
      bottom: 0,
      position: 'fixed',
      background: '#1e88e5',
      "& .MuiBottomNavigationAction-root": {
          maxWidth: '400px',
      }
    },
  });
  
const BottomTabs = (props) => {
    const classes = useStyles();
  
    return (
      <BottomNavigation
        value={props.selected}
        onChange={(event, newValue) => {
          props.setSelected(newValue);
        }}
        showLabels
        className={classes.tabs}
      >
        <BottomNavigationAction label="Front Left" style={{ color: "white" }} icon={<PetsIcon style={{color: "white"}} />} />
        <BottomNavigationAction label="Front Right" style={{ color: "white" }} icon={<PetsIcon style={{color: "white"}}/>} />
        <BottomNavigationAction label="Back Left" style={{ color: "white" }} icon={<PetsIcon style={{color: "white"}}/>} />
        <BottomNavigationAction label="Back Right" style={{ color: "white" }} icon={<PetsIcon style={{color: "white"}}/>} />
      </BottomNavigation>
    );
  }

  export default BottomTabs;