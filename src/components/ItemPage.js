import React, {useEffect, useState} from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Avatar, CardHeader, IconButton, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";
import productInfo from "../static/product1Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ShareIcon from "@material-ui/icons/Share";
import Comments from './Comments';
import Footer from "./footer";
import Header from "./Header/header";
import { db,firestore } from '../firebase';
import {useAuth} from '../contexts/AuthContext';
import {useHistory} from "react-router-dom";


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
  root: {
    maxWidth: 3000,
    color: '#333d51'
  },
  title: {
    fontSize: "3rem",
    color: '#333d51'

  },
  itemNumber: {
    fontSize: "1rem",
  },
  icons: {
    justifyContent: "right",
  },
  button:{
    backgroundColor:'#d3ac2b'
}
});

function Pictures(props) {
  console.log(props.productImage)
  return (
    <Carousel>
        <Images item={props.productImage} />
    </Carousel>
  );
}



function Final(props) {
  
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [listingId, setListingId] = useState("");
  const { currentUser } = useAuth();
  const history=useHistory();
  useEffect(() => {
    async function fetchData() {
      db.listings.doc(props.match.params.id).get().then((doc) => {
        setProduct(doc.data());
        setListingId(doc.id);
      });
    }
    fetchData();
  }, []);

  function AddToCartCard(props) {
    const classes = useStyles();
    
      
    
    async function AddToCart(){
      if(currentUser)
      {
        console.log(currentUser.uid);
        await firestore.collection('cart').doc(currentUser.uid).collection("cartContents").add(product);
      }else{
       history.push("/login");
      }
    }

    return (
      <ThemeProvider theme={theme}> 
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              component="h1"
              className={classes.title}
            >
              {"Item Info"}
              
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
                {"Category: "}
              {props.category}
              <br></br><br></br>
                {"Shipping: "}
              {props.shipping}
              <br></br><br></br>
              {"Condition: "}
              {props.condition}
              <br></br><br></br>
              {"Returns: "}
              {props.returns}
              <br></br><br></br>
               {"Price: $"}
              {props.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={classes.button} onClick={AddToCart}> Add to Cart</Button>
        </CardActions>
      </Card>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>

      <Grid Item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={9}>
          <br />
          <Typography className={classes.title}>{product.title}</Typography>
          
          <br></br>
        </Grid>
        <IconButton className={classes.icons}>
          <StarBorderIcon />
        </IconButton>
        <IconButton className={classes.icons}>
          <ShareIcon />
        </IconButton>
      </Grid>

      <Grid Item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={4}>
          <Pictures productImage={product.image} />
        </Grid>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={5}>
          <AddToCartCard title={product.title} category={product.category} shipping={product.shipping} condition={product.condition} returns={product.returns} price={product.price}/>
          <br></br><br></br>
          <DescriptionCard description={product.description}/>
          <br></br><br></br>
          <SellerCard seller={product.seller} avatar={product.avatar}/>
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>

      
      <br></br>
      <Grid Item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10}>
          <Comments id={props.match.params.id} />
        </Grid>
      </Grid>
      <br></br>
      <Footer />
    </Grid>
    </ThemeProvider>
  );
}

function Images(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="840"
          image={props.item}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
    </ThemeProvider>
  );
}

function DescriptionCard(props) {
  const classes = useStyles();
  
  return (
    <ThemeProvider theme={theme}>
    <Card className={classes.root}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {"Description"}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {props.description}
          </Typography>
        </CardContent>
      
    </Card>
    </ThemeProvider>
  );
}

function SellerCard (props) {
    const {avatar, sellerName, sellerRating, sellerTime} = productInfo[0];
    const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
      <Card className={classes.root}>
          <CardHeader
          avatar={ <Avatar src={props.avatar} />}
          
          title={props.seller}
          subheader= {sellerRating}
          
        />

  
        <CardContent>
          <Typography variant="body2" component="p">
              {"Member Since: "}
            {sellerTime}
            
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button}size="small">See other Listings</Button>
        </CardActions>
      </Card>
      </ThemeProvider>
    );
  }
export default Final;