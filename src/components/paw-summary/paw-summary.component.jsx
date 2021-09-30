import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, lightBlue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

import PawOutcomeTabs from '../paw-outcome-tabs/paw-outcome-tabs.component';
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component';

const useStyles = makeStyles({
  checkboxSumOne: {
    // position: 'fixed',
    marginTop: 100,
    marginLeft: 720,
    color: "green",
    fontSize: 60,
  },
  checkboxSumTwo: {
    // position: 'fixed',
    marginTop: 170,
    marginLeft: 720,
    color: "green",
    fontSize: 60,
  },
  checkboxSumThree: {
    // position: 'fixed',
    marginTop: 240,
    marginLeft: 720,
    color: "green",
    fontSize: 60,
  },
  checkboxSumFour: {
    // position: 'fixed',
    marginTop: 310,
    marginLeft: 720,
    color: "green",
    fontSize: 60,
  },
  checkboxSumFive: {
    // position: 'fixed',
    marginTop: 380,
    marginLeft: 720,
    color: "green",
    fontSize: 60,
  },
  allButtons: {
    // position: 'fixed',
    // marginTop: 480,
    // marginLeft: 800
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
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h6">Front Left Paw </Typography>
        </Grid>
        <Grid item>
          <CustomCheckbox></CustomCheckbox>
        </Grid >
        <Grid item>
          <CustomCheckbox></CustomCheckbox>
        </Grid>
        <Grid item>
          <CustomCheckbox></CustomCheckbox>
        </Grid>
        <Grid item>
          <CustomCheckbox></CustomCheckbox>
        </Grid>
        <Grid item>
          <CustomCheckbox></CustomCheckbox>
        </Grid>
        <Grid container direction="column">
          <PawOutcomeTabs></PawOutcomeTabs>
        </Grid>
        <Grid container direction="column">
          <PawOutcomeTabs></PawOutcomeTabs>
        </Grid>
        <Grid container className={classes.allButtons}>
          <Grid>
            <BlueButton variant="contained" size="large">NEXT PAW</BlueButton>
          </Grid>
          <Grid item>
            <GreenButton variant="contained" color="primary" size="large">FINISH SESSION</GreenButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default PawSummary;