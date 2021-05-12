import React from 'react';

import Header from '../../components/header/header.component';
import BottomTabs from '../../components/bottom-tabs/bottom-tabs.component';


const Session = () => {
// TODO: tutaj przenis state z tabsow (selectedPaw)
const selectedPaw = ''; // TODO: to usun, bo dodalem tylko zeby nie bylo errora

    return (
        <div className=''>
            <Header />

            <BottomTabs selected={selectedPaw} />
        </div>
    )
};

export default Session;

