import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './LandingPageHeader';
import TwoOptions from './LandingPageTwoOptions';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/pexels-pixabay-326231.jpg'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
    },
}));
function App(){
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <CssBaseline />
        <Header />
        <TwoOptions />
    </div>
    );
}
export default App;