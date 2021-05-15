import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles({
    checkboxOne: {
        position: 'fixed',
        marginTop: 200,
        marginLeft: 220,
        color: "green",
        fontSize: 50,
    },
    checkboxTwo: {
        position: 'fixed',
        marginTop: 200,
        marginLeft: 420,
        color: "green",
        fontSize: 50,
    }
});

const CustomCheckbox = () => {
    const classes = useStyles();
    return (
        <div>
            <CheckBoxIcon className={classes.checkboxOne} ></CheckBoxIcon>
            <CheckBoxIcon className={classes.checkboxTwo} ></CheckBoxIcon>
        </div>
    )
};

export default CustomCheckbox;