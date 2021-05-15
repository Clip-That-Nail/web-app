import React from 'react';

import Header from '../../components/header/header.component';
import BottomTabs from '../../components/bottom-tabs/bottom-tabs.component';


const Session = () => {
    const [selectedPaw, setSelectedPaw] = React.useState(0);

    const displayContent = () => {
        if (selectedPaw === 0) {
            return <div> Front Left Paw</div>
        } else if (selectedPaw === 1) {
            return <div> Front Right Paw</div>
        } else if (selectedPaw === 2) {
            return <div> Back Left Paw</div>
        } else {
            return <div> Back Right Paw</div>
        }
    };

    return (
        <div className=''>
            <Header />
            {displayContent()}
            <BottomTabs selected={selectedPaw} setSelected={setSelectedPaw} />
        </div>
    )
};

export default Session;
