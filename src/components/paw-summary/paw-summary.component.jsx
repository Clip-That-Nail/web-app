import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import { green, lightBlue } from '@material-ui/core/colors';

import PawOutcomeTabs from '../paw-outcome-tabs/paw-outcome-tabs.component';

const useStyles = makeStyles({
    checkboxSumOne: {
        position: 'fixed',
        marginTop: 100,
        marginLeft: 720,
        color: "green",
        fontSize: 60,
    },
    checkboxSumTwo: {
        position: 'fixed',
        marginTop: 170,
        marginLeft: 720,
        color: "green",
        fontSize: 60,
    },
    checkboxSumThree: {
        position: 'fixed',
        marginTop: 240,
        marginLeft: 720,
        color: "green",
        fontSize: 60,
    },
    checkboxSumFour: {
        position: 'fixed',
        marginTop: 310,
        marginLeft: 720,
        color: "green",
        fontSize: 60,
    },
    checkboxSumFive: {
        position: 'fixed',
        marginTop: 380,
        marginLeft: 720,
        color: "green",
        fontSize: 60,
    },
    allButtons: {
        position: 'fixed',
        marginTop: 480,
        marginLeft: 800
    },
});

const GreenButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  }))(Button);

  const BlueButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(lightBlue[500]),
      backgroundColor: lightBlue[500],
      marginRight: 20,
      '&:hover': {
        backgroundColor: lightBlue[700],
      },
    },
  }))(Button);

const PawSummary = () => {
    const classes = useStyles();

    return (
        <div>
            <CheckBoxIcon className={classes.checkboxSumOne} ></CheckBoxIcon>
            <CheckBoxIcon className={classes.checkboxSumTwo} ></CheckBoxIcon>
            <CheckBoxIcon className={classes.checkboxSumThree} ></CheckBoxIcon>
            <CheckBoxIcon className={classes.checkboxSumFour} ></CheckBoxIcon>
            <CheckBoxIcon className={classes.checkboxSumFive} ></CheckBoxIcon>
            <div className={classes.allButtons}>
                <BlueButton variant="contained" size="large">NEXT PAW</BlueButton>
                <GreenButton variant="contained" color="primary" size="large">FINISH SESSION</GreenButton>
                <PawOutcomeTabs></PawOutcomeTabs>
            </div>
        </div>
    )
}

export default PawSummary;