import React from 'react';
import Grid from '@material-ui/core/Grid';
import PawMain from '../paw-main/paw-main.component';
import PawSummary from '../paw-summary/paw-summary.component';

const FrontLeftPaw = () => {
    return (
        <Grid container>
            <Grid item md={6}>
                <PawMain></PawMain>
            </Grid>
            <Grid item md={6}>
                <PawSummary></PawSummary>
            </Grid>
        </Grid>
    )
};

export default FrontLeftPaw;