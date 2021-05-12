import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    tabs: {
        background: '#1e88e5',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
});

const BottomTabs = (props) => {
    const classes = useStyles();
    const [selectedPaw, setSelectedPaw] = React.useState('recents'); //TODO: wyciagnij do componenta wyzej i uzywaj props.selected

    const handleChange = (event, newValue) => {
        setSelectedPaw(newValue);
    };

    return (
        <BottomNavigation value={selectedPaw} onChange={handleChange} className={classes.tabs}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}

export default BottomTabs;