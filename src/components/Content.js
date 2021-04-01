import React from 'react';
import ProductCard from './ProductCards';
import {Grid} from '@material-ui/core';
import ProductList from '../static/ProductConstants'

const Content = () => {

    const getProductCard =  (product) => {
        return (
            <Grid item xs={12} sm={3}>
              <ProductCard {...product} />
            </Grid>
          );
        };
    return (
        <Grid container spacing={7}>
                {ProductList.map(product => getProductCard(product))}
            
        </Grid>
    );

};

export default Content;