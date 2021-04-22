import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
    yes: false,
    no: false,

    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { yes, no} = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Returns</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={yes} onChange={handleChange} name="yes" />}
            label="Yes"
          />
          <FormControlLabel
            control={<Checkbox checked={no} onChange={handleChange} name="no" />}
            label="No"
          />

        </FormGroup>
      </FormControl>
      
    </div>
  );
}
