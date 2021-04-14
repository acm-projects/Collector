import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button:{
      backgroundColor:'#d3ac2b'
  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const ItemNum =1
  const itemPrice = 33.33
  const shippingPrice = 22.33
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        
        
        
        <Typography variant="body2" component="p">
          Items({ItemNum}):    {itemPrice}
          <br />
          Shipping:  {shippingPrice}
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant="h5" component="h2" >
          Subtotal: {itemPrice+shippingPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} size="large">Go to Checkout</Button>
      </CardActions>
    </Card>
  );
}