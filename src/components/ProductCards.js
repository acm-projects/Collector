import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, IconButton, CardMedia } from '@material-ui/core';
import {StarBorder} from '@material-ui/icons';
import {Link,useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 685,
    minHeight: 350,
  },
  button:{
    backgroundColor:'#d3ac2b'
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
      <Link to="/item:id">
            <CardMedia style={{height: "175px", width:'auto'}} image={image}/>
      </Link>
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