import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';

import CustomCheckbox from '../custom-checkbox/custom-checkbox.component';

const useStyles = makeStyles({
  pawMain: {
    position: 'absolute',
    margin: "200px",
    color: "1e88e5",
    fontSize: 300
  },
  clawWrapper: {
    position: 'absolute',
    marginTop: 60,
    marginLeft: 20,
  },
});

const PawMain = () => {
  const classes = useStyles();
  return (
    <div>
      <PetsIcon className={classes.pawMain} style={{ color: "1e88e5" }} />
      <div className={classes.clawWrapper}>
        <CustomCheckbox className={classes.checkboxOne} initialStatus="unchecked" onClick={() => { }} />
      </div>
      <div className={classes.clawWrapper}>
        <CustomCheckbox initialStatus="unchecked" onClick={() => { }} />
      </div>
      <div className={classes.clawWrapper}>
        <CustomCheckbox initialStatus="unchecked" onClick={() => { }} />
      </div>
      <div className={classes.clawWrapper}>
        <CustomCheckbox initialStatus="unchecked" onClick={() => { }} />
      </div>
    </div>
  )
};

export default PawMain;