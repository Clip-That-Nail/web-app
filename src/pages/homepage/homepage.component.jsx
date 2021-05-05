import React from 'react';
import Button from '@material-ui/core/Button';

import './homepage.styles.css';

const HomePage = () => (
    <div className='homepage'>
            <h1 className='title'>Clip That Nail</h1>
            <Button style={{ background: '#1e88e5' }} variant="contained" color="primary">
                Start new clipping session</Button>
    </div>
);

export default HomePage;