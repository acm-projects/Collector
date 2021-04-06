import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Header from "./Header/header";
import CartContent from "./CartContent";
import Carousel from "./SectionCarousel";
import Footer from "./footer";
import Category from "./Filters/Category";
import Condition from "./Filters/condition";
import Price from "./Filters/price";
import Return from "./Filters/returns";
import Sort from "./Filters/sort";
import { makeStyles } from "@material-ui/core/styles";
import CartCard from './CartCard'

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
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <br />
        <br />
      <Grid Item container>
        <Grid item xs={0} sm={1} />
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
        
      <Grid item xs={0} sm={1} />

        <Grid item xs={12} sm={8}>
          <CartContent />
        </Grid>
        <Grid item xs={12} sm={2}>
          <CartCard />
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
      <Grid item>
        <br />
        <br />
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
