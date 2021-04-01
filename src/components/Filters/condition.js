import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    newItem: true,
    newOther: false,
    used: false,
    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { newItem, newOther, used} = state;
  const error = [newItem, newOther, used].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Condition</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={newItem} onChange={handleChange} name="newItem" />}
            label="New"
          />
          <FormControlLabel
            control={<Checkbox checked={newOther} onChange={handleChange} name="newOther" />}
            label="New Other"
          />
          <FormControlLabel
            control={<Checkbox checked={used} onChange={handleChange} name="used" />}
            label="Used"
          />
        </FormGroup>
      </FormControl>
      
    </div>
  );
}
