import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component';

const useStyles = makeStyles((theme) => ({
  pawOutcome: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PawOutcomeTabs = () => {
  const classes = useStyles();
  const [outcome, setOutcome] = React.useState('');

  const handleChange = (event) => {
    setOutcome(event.target.value);
  };

  return (
    <div>
      <CustomCheckbox></CustomCheckbox>
      <FormControl variant="filled" className={classes.pawOutcome}>
        <InputLabel id="demo-simple-select-filled-label">Select positive outcome</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={outcome}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Positive</MenuItem>
          <MenuItem value={20}>Bleeding</MenuItem>
          <MenuItem value={30}>Warning</MenuItem>
        </Select>
      </FormControl>
      <CustomCheckbox></CustomCheckbox>
      <FormControl variant="filled" className={classes.pawOutcome}>
        <InputLabel id="demo-simple-select-filled-label">Select positive outcome</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={outcome}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Positive</MenuItem>
          <MenuItem value={20}>Bleeding</MenuItem>
          <MenuItem value={30}>Warning</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.pawOutcome}>
        <InputLabel id="demo-simple-select-filled-label">Select positive outcome</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={outcome}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Positive</MenuItem>
          <MenuItem value={20}>Bleeding</MenuItem>
          <MenuItem value={30}>Warning</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.pawOutcome}>
        <InputLabel id="demo-simple-select-filled-label">Select positive outcome</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={outcome}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Positive</MenuItem>
          <MenuItem value={20}>Bleeding</MenuItem>
          <MenuItem value={30}>Warning</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.pawOutcome}>
        <InputLabel id="demo-simple-select-filled-label">Select positive outcome</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={outcome}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Positive</MenuItem>
          <MenuItem value={20}>Bleeding</MenuItem>
          <MenuItem value={30}>Warning</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default PawOutcomeTabs;
