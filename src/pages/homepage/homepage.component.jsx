import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './homepage.styles.css';

const useStyles = makeStyles((theme) => ({
    homepageBtn: {
        background: '#1e88e5',
    }
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className='homepage'>
            <h1 className='title'>Clip That Nail</h1>
            <Button className={classes.homepageBtn} variant="contained" color="primary">
                Start new clipping session</Button>
        </div>
    )
};

export default HomePage;