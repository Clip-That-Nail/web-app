import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';

import CustomCheckbox from '../custom-checkbox/custom-checkbox.component';

const useStyles = makeStyles({
  pawMain: {
    color: "1e88e5",
    fontSize: 300,
  },
  pawMainWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  clawWrapper: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 60,
    marginLeft: 20,
  },
  sortContainers: {
    display: 'flex',
    direction: 'column',
    alignItems: 'stretch',
  },
  centeredColumn: {
    textAlign: 'center'
  }
});

const PawMain = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={4} container direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Grid item md={3} className={classes.centeredColumn}>
          <CustomCheckbox initialStatus="unchecked" onClick={() => { }} />
        </Grid>
        <Grid item md={3} className={classes.centeredColumn}>
          <CustomCheckbox initialStatus="unchecked" onClick={() => { }} />
        </Grid>
        <Grid item md={3} className={classes.centeredColumn}>
          <CustomCheckbox initialStatus="unchecked" onClick={() => { }} />
        </Grid>
        <Grid item md={3} className={classes.centeredColumn}>
          <CustomCheckbox initialStatus="unchecked" onClick={() => { }} />
        </Grid>
      </Grid>
      <Grid container item xs={4}>
        <Grid item >
          <PetsIcon className={classes.pawMain} style={{ color: "1e88e5" }} />
        </Grid>
      </Grid>
      <Grid container item xs={2}>
        <Grid item>
          <CustomCheckbox initialStatus="unchecked" onClick={() => { }} />
        </Grid>
      </Grid>
    </Grid>
  )
};

export default PawMain;