import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCards';
import {Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {saveItems} from '../redux/actions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

const Content = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveItems(props.items));
  }, [props.items]);
  

  const products = props.products;

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
                products && products.length > 0 && products.map((product) => (
                    getProductCard(product.id, product)
                  ))
              }
        </Grid>
    );

};

const mapStateToProps = (state) => {
  return {
    items: state.firestore.ordered.listings,
    products: state.products.tempItems
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'listings' }
  ]),
)(Content);