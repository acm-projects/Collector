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
    poor: false,
    acceptable: false,
    good: false,
    veryGood: false,
    verGoodPlus: false,
    excellent: false,
    nearMint: false,
    mint: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { poor, acceptable,good,veryGood,veryGoodPlus,excellent,nearMint,mint} = state;
  const error = [poor, acceptable,good,veryGood,veryGoodPlus,excellent,nearMint,mint].filter((v) => v).length !== 2;


  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Condition</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={poor} onChange={handleChange} name="poor" />}
            label="Poor (P)"
          />
          <FormControlLabel
            control={<Checkbox checked={acceptable} onChange={handleChange} name="acceptable" />}
            label="Acceptable (A)"
          />
          <FormControlLabel
            control={<Checkbox checked={good} onChange={handleChange} name="good" />}
            label="Good (G)"
          />
          <FormControlLabel
            control={<Checkbox checked={veryGood} onChange={handleChange} name="veryGood" />}
            label="Very Good (VG)"
          />
          <FormControlLabel
            control={<Checkbox checked={veryGoodPlus} onChange={handleChange} name="veryGoodPlus" />}
            label="Very Good Plus (VG+)"
          />
          <FormControlLabel
            control={<Checkbox checked={excellent} onChange={handleChange} name="excellent" />}
            label="Excellent (E)"
          />
          <FormControlLabel
            control={<Checkbox checked={nearMint} onChange={handleChange} name="nearMint" />}
            label="Near Mint (NM)"
          />
          <FormControlLabel
            control={<Checkbox checked={mint} onChange={handleChange} name="mint" />}
            label="Mint (M)"
          />
        </FormGroup>
      </FormControl>
      
    </div>
  );
}
