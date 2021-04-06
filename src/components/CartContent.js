import React, { useState, useEffect } from 'react';
import CartProductCards from './CartProductCards';
import {Grid} from '@material-ui/core';
import ProductList from '../static/ProductConstants'
import { db } from '../firebase';



const Content = () => {
    const [listings, setListings] = useState([]);
    useEffect(() => {
      db.listings.onSnapshot(snapshot => {
          setListings(snapshot.docs.map(doc => ({
            id: doc.id,
            product: doc.data()
        })))
      })
    }, []);
    const getProductCard =  (id, product) => {
        return (
            <Grid item xs={12} sm={7}>
              <CartProductCards key={id} {...product} />
            </Grid>
          );
        };
    return (
        <Grid container spacing={4}>
              {
                listings.map(({id, product}) => (
                    getProductCard(id, product)
                  ))
              }
        </Grid>
    );

};

export default Content;