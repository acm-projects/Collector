import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCards';
import {Grid} from '@material-ui/core';
import { db } from '../firebase';


const Content = () => {
    const [listings, setListings] = useState([]);
    
    useEffect(() => {
      const fetchData = async() => {
        db.listings.onSnapshot(snapshot => {
          setListings(snapshot.docs.map(doc => ({
            id: doc.id,
            product: doc.data()
        })))
      })
      }
      fetchData();
    }, []);
    const getProductCard =  (id, product) => {
        return (
            <Grid item xs={12} sm={3}>
              <ProductCard key={id} itemId={id} {...product} />
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