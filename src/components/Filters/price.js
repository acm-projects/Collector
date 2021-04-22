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
    under20: false,
    twentyTo50: false,
    fiftyTo100: false,
    over100:false,
    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { under20, twentyTo50, fiftyTo100,over100} = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Price</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={under20} onChange={handleChange} name="under20" />}
            label="Under $20"
          />
          <FormControlLabel
            control={<Checkbox checked={twentyTo50} onChange={handleChange} name="twentyTo50" />}
            label="$20 - $50"
          />
          <FormControlLabel
            control={<Checkbox checked={fiftyTo100} onChange={handleChange} name="fiftyTo100" />}
            label="$50 - $100"
          />
          <FormControlLabel
            control={<Checkbox checked={over100} onChange={handleChange} name="over100" />}
            label="Over $100"
          />
        </FormGroup>
        
      </FormControl>
      
    </div>
  );
}
