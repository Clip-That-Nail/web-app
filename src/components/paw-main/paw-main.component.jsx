import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';

import CustomCheckbox from '../custom-checkbox/custom-checkbox.component';

const useStyles = makeStyles({
    pawMain: {
      position: 'fixed',
      margin: "200px",
      color: "1e88e5", 
      fontSize: 300
    },
  });

const PawMain = () => {
    const classes = useStyles();
    return (
        <div>
            <PetsIcon className={classes.pawMain} style={{ color: "1e88e5", fontSize: 300 }} />
            <CustomCheckbox/>
        </div>
    )
};

export default PawMain;