import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import ClearIcon from '@material-ui/icons/Clear';

import Colors from '../../constants/Colors';

const useStyles = makeStyles({
    checkbox: {
        display: 'flex',
        padding: 0,
        width: 50,
        height: 50,
        borderRadius: 5,
        borderWidth: 5,
        zIndex: 1
    },
    sizeicon: {
        fontSize: 50
    },
    checkboxBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    checked: {
        backgroundColor: Colors.greenColor,
        borderColor: Colors.greenColor
    },
    bleeded: {
        backgroundColor: Colors.redColor,
        borderColor: Colors.redColor
    },
    warning: {
        backgroundColor: Colors.yellowColor,
        borderColor: Colors.yellowColor
    },
    unchecked: {
        backgroundColor: 'lightgrey',
        borderColor: 'grey'
    },
    disabled: {
        backgroundColor: '#999999',
        borderColor: 'grey'
    },
});

const CustomCheckbox = ({ initialStatus, onClick }) => {
    const classes = useStyles();
    const [status, setStatus] = useState(initialStatus);

    const displayContent = () => {
        switch (status) {
            case 'checked':
                return (
                    <div className={`${classes.checkbox} ${classes.checked}`} onClick={handleOnClick}>
                        <div className={classes.checkboxBody}>
                            <CheckIcon className={classes.sizeicon}/>
                        </div>
                    </div>
                );
            case 'bleeded':
                return (
                    <div className={`${classes.checkbox} ${classes.bleeded}`} onClick={handleOnClick}>
                        <div className={classes.checkboxBody}>
                            <InvertColorsIcon className={classes.sizeicon}/>
                        </div>
                    </div>
                );
            case 'warning':
                return (
                    <div className={`${classes.checkbox} ${classes.warning}`} onClick={handleOnClick}>
                        <div className={classes.checkboxBody}>
                            <PriorityHighIcon className={classes.sizeicon}/>
                        </div>
                    </div>
                );
            case 'disabled':
                return (
                    <div className={`${classes.checkbox} ${classes.disabled}`} onClick={handleOnClick}>
                        <div className={classes.checkboxBody}>
                            <ClearIcon className={classes.sizeicon}/>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className={`${classes.checkbox} ${classes.sizeicon} ${classes.unchecked}`} onClick={handleOnClick}>
                        <div className={classes.checkboxBody}></div>
                    </div>
                );
        }
    };


    const handleOnClick = () => {
        if (status === 'disabled') {
            setStatus('disabled');
            onClick('disabled');
        } else if (status === 'unchecked') {
            setStatus('checked');
            onClick('checked');
        } else if (status === 'checked') {
            setStatus('bleeded');
            onClick('bleeded');
        } else if (status === 'bleeded') {
            setStatus('warning');
            onClick('warning');
        } else if (status === 'warning') {
            setStatus('unchecked');
            onClick('unchecked');
        }
    }

    return (
        <>
            {displayContent()}
        </>
    )
};

export default CustomCheckbox;