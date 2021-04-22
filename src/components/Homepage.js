import React from "react";
import { Grid } from '@material-ui/core';
import Header from './Header/header';
import Content from "./Content";
import Carousel from './SectionCarousel';
import Footer from './footer';
import Category from './Filters/Category';
import Condition from './Filters/condition';
import Price from './Filters/price';
import Return from './Filters/returns';
import Sort from './Filters/sort';
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

const App= () => {
  return (
    <ThemeProvider theme={theme}>
    <Grid container direction= "column">
      <Grid item>
          <Header />
      </Grid>
      
      <Grid item>
      <br/>
      <br/>
      </Grid>
      <Grid Item container>
        <Grid item xs={0} sm={1}/>
        <Grid item xs={12} sm={5}>
          <Carousel />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
      <br/>
      <br/>
      <Grid Item container>
        <Grid item xs={0} sm={2}>
        <Sort/>
          <Category />
          <Condition/>
          <Price />
          <Return />
          
        </Grid>

        <Grid item xs={12} sm={9}>
          <Content />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
      <Grid item>
      <br/>
      <br/>
          <Footer />
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}

export default App; 



