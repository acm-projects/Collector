import React from "react";
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
import { Avatar, CardHeader, IconButton } from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";
import productInfo from "../static/product1Info";
import productImages from "../static/product1Images";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ShareIcon from "@material-ui/icons/Share";
import Comments from './Comments';
import Footer from "./footer";
import Header from "./Header/header";
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
  return (
    <Carousel>
      {productImages.map((item, i) => (
        <Images key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Final() {
  const product = productInfo[0];
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>

      <Grid Item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={9}>
          <br />
          <Typography className={classes.title}>{product.title}</Typography>
          <Typography className={classes.itemNumber}>
            {"Item Number: "}
            {product.itemNumber}

            
          </Typography>
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
        <Grid item xs={12} sm={5}>
          <Pictures />
        </Grid>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={4}>
          <AddToCartCard />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>

      <Grid Item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10}>
          <DescriptionCard />
        </Grid>
      </Grid>
        <br></br>
      <Grid Item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10}>
          <SellerCard />
        </Grid>
      </Grid>
      <br></br>
      <Grid Item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10}>
          <Comments />
        </Grid>
      </Grid>
      <br></br>
      <Footer />
    </Grid>
    
  );
}

function Images(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="340"
          image={props.item.imageURL}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}

function AddToCartCard({}) {
  const classes = useStyles();
  const CardContents = productInfo[0];
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {CardContents.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
              {"Category: "}
            {CardContents.category}
            <br></br><br></br>
              {"Shipping: "}
            {CardContents.shipping}
            <br></br><br></br>
            {"Condition: "}
            {CardContents.condition}
            <br></br><br></br>
            {"Returns: "}
            {CardContents.returns}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button}> Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

function DescriptionCard({}) {
  const classes = useStyles();
  const CardContents = productInfo[0];
  return (
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
            {CardContents.description}
          </Typography>
        </CardContent>
      
    </Card>
  );
}

function SellerCard ({}) {
    const {avatar, sellerName, sellerRating, sellerTime} = productInfo[0];
    const classes = useStyles();
    return (
      <Card className={classes.root}>
          <CardHeader
          avatar={ <Avatar src={avatar} />}
          
          title={sellerName}
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
    );
  }
export default Final;
