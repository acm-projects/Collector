import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, IconButton, CardMedia } from '@material-ui/core';
import {StarBorder} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 685,
    minHeight: 350,
  },
  button:{
    backgroundColor:'#d3ac2b'
},
image:{
  transform: "none",
  position: "relative",
  zIndex: "3"
}
});

const ProductCard = (props) => {
  const {avatar, title, seller, price, description, image} = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardHeader
        avatar={ <Avatar src={avatar} />}
        action={
          <IconButton aria-label="settings">
            <StarBorder />
          </IconButton>
        }
        title={seller}
        subheader= {`$${price}`}
      />
            <CardMedia style={{height: "180px", width:'auto'}} image={image} className={classes.image}/>

      <CardContent>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button}size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}
export default ProductCard;