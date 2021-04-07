import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Header from "./Header/header";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Footer from './footer'

const useStyles = makeStyles({
  title: {
    fontSize: "3rem",
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {

    minWidth: 188,
  },
  button:{
    backgroundColor:'#d3ac2b'
}
});

export default function AddressForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <br></br>
      <br></br>

      <Grid container spacing={3}>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
          <Typography className={classes.title}>
            Create a new listing
          </Typography>
        </Grid>

        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />

        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="price"
            name="price"
            label="Price "
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={7}>
          <TextField
            required
            id="description"
            name="description"
            variant="filled"
            label="Description"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={7}>
          <FormControl variant='filled'className={classes.formControl}>
              
            <InputLabel htmlFor="grouped-select">Item Condition</InputLabel>
            <Select defaultValue="" id="grouped-select">
                
            <MenuItem value={1}>Poor (P)</MenuItem>
            <MenuItem value={2}>Acceptable (A)</MenuItem>
          <MenuItem value={3}>Good (G)</MenuItem>
          <MenuItem value={4}>Very Good (VG)</MenuItem>
          <MenuItem value={5}>Very Good Plus (VG+)</MenuItem>
          <MenuItem value={6}>Excellent (E)</MenuItem>
          <MenuItem value={7}>Near Mint (NM)</MenuItem>
          <MenuItem value={8}>Mint (M)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
        <FormControl variant='filled'className={classes.formControl}>
              
              <InputLabel htmlFor="grouped-select">Category</InputLabel>
              <Select defaultValue="" id="grouped-select">
                  
              <MenuItem value={1}>Pokemon</MenuItem>
              <MenuItem value={2}>Yu-Gi-Oh</MenuItem>
            <MenuItem value={3}>Musical Instrument</MenuItem>
            <MenuItem value={4}>Sports Cards</MenuItem>
            <MenuItem value={5}>Games</MenuItem>
            <MenuItem value={6}>Other</MenuItem>
           
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
        <FormControl variant='filled'className={classes.formControl}>
              
              <InputLabel htmlFor="grouped-select">Shipping Options</InputLabel>
              <Select defaultValue="" id="grouped-select">
                  
              <MenuItem value={1}>Shipping Available</MenuItem>
              <MenuItem value={2}>Pick Up Only</MenuItem>
            
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
        <TextField
          id="shipping"
          label="Shipping Cost"
          type="number"
          variant="filled"

          InputLabelProps={{
            shrink: true,
            
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }}
        />
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
        <FormControl variant='filled'className={classes.formControl}>
              
              <InputLabel htmlFor="grouped-select">Returns Accepted?</InputLabel>
              <Select defaultValue="" id="grouped-select">
                  
              <MenuItem value={1}>Yes</MenuItem>
              <MenuItem value={2}>No</MenuItem>
            
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={7}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Check this box to accept our terms and concitions"
          />
        </Grid>

        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={7}>
        <Button className={classes.button} size="large">Go to Checkout</Button>
        </Grid>
        <Grid item xs={0} sm={4} />

        
      </Grid>
    </React.Fragment>
  );
}
