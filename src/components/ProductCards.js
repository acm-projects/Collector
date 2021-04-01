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
  
});

const ProductCard = (props) => {
  const {avatar, title, price, description, image} = props;
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
        title={title}
        subheader= {price}
      />
            <CardMedia style={{height: "150px"}} image={image}/>

      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}
export default ProductCard;