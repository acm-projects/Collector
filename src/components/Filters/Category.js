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
    yugioh: false,
    pokemon: false,
    musicalInstuments: false,
    sportsCards: false,
    games: false,
    magicTheGathering: false,
    nft: false,
    other: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { yugioh, pokemon, musicalInstuments,sportsCards,games,magicTheGathering,nft,other } = state;
  const error = [yugioh, pokemon, musicalInstuments,sportsCards,games,magicTheGathering,nft,other].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select Category</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={yugioh} onChange={handleChange} name="yugioh" />}
            label="Pokemon"
          />
          <FormControlLabel
            control={<Checkbox checked={pokemon} onChange={handleChange} name="pokemon" />}
            label="Yu-Gi-Oh"
          />
          <FormControlLabel
            control={<Checkbox checked={musicalInstuments} onChange={handleChange} name="musicalInstuments" />}
            label="Musical Instrument"
          />
          <FormControlLabel
            control={<Checkbox checked={sportsCards} onChange={handleChange} name="sportsCards" />}
            label="Sports Cards"
          />
          <FormControlLabel
            control={<Checkbox checked={games} onChange={handleChange} name="games" />}
            label="Games"
          />
          <FormControlLabel
            control={<Checkbox checked={magicTheGathering} onChange={handleChange} name="magicTheGathering" />}
            label="Magic the Gathering"
          />
          <FormControlLabel
            control={<Checkbox checked={nft} onChange={handleChange} name="nft" />}
            label="NFT"
          />
          <FormControlLabel
            control={<Checkbox checked={other} onChange={handleChange} name="other" />}
            label="Other"
          />
        </FormGroup>
      </FormControl>
      
    </div>
  );
}
