import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Header from "./Header/header";
import CartContent from "./CartContent";
import { makeStyles } from "@material-ui/core/styles";
import CartCard from './CartCard'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme(
  {
  palette: {
    primary: {
      light: '#5e677d',
      main: '#333d51',
      dark: '#0b1729',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffdd5e',
      main: '#d3ac2b',
      dark: '#9e7d00',
      contrastText: '#000',
    },
  },
});
const useStyles = makeStyles({
   title:{
        fontSize:'3rem',
        justifyContent: "center",
    alignItems: "center",
   },
  });
const App = () => {
    const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <br />
        <br />
      <Grid Item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={5}>
        <Typography className={classes.title}>
            Shopping Cart
        </Typography>
        </Grid>
        </Grid>


      
      <Grid item>
        <br />
        <br />
      </Grid>
      
 
      <Grid Item container>
        
      <Grid item xs={0} sm={2} />

        <Grid item xs={12} sm={6}>
          <CartContent />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CartCard />
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
      <Grid item>
        <br />
        <br />
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};

export default App;
