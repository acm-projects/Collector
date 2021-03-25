import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, IconButton, CardMedia } from '@material-ui/core';
import {StarBorder} from '@material-ui/icons';



const ProductCard = (props) => {
  const {avatar, title, price, description, image} = props;
  return (
    <Card style={{ minHeight: '32vw', padding: '10px'}}>
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
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
}
export default ProductCard;