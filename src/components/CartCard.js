import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {useAuth} from '../contexts/AuthContext';
import { firestore } from '../firebase';

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
  var ItemNum =0;
  var itemPrice = 0;
  var shippingPrice = 0;
  const [listings, setListings] = useState([]);
    const {currentUser}=useAuth();
    useEffect(() => {
      firestore.collection('cart').doc(currentUser.uid).collection('cartContents').onSnapshot(snapshot => {
          setListings(snapshot.docs.map(doc => ({
            id: doc.id,
            product: doc.data()
        })))
      })
    }, []);
    var counter;
    for(counter=0;counter<listings.length;counter++){
      ItemNum+=1;
      itemPrice+=listings[counter].product.price;
      console.log(listings[counter].product.price);
      itemPrice.toFixed(2);
    }
    for(counter=0;counter<listings.length;counter++){
      if(listings[counter].product.shipping=="Shipping Available"){
        shippingPrice=15.00;
      }
      console.log(listings[counter].product.shipping);
      shippingPrice.toFixed(2);
    }
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        
        
        
        <Typography variant="body2" component="p">
          Items({ItemNum}): ${itemPrice}
          <br />
          Shipping: ${shippingPrice}
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant="h5" component="h2" >
          Total : ${itemPrice+shippingPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} size="large" href="/checkout">Go to Checkout</Button>
      </CardActions>
    </Card>
  );
}