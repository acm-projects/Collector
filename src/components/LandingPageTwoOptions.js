import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './LandingPageImageCard';
import CardContents from '../static/CardContents';
import useWindowPosition from '../hook/useWindowPosition';


const useStyles = makeStyles((theme) => ({
    root:{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

}));
export default function (){
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return(
        <div className={classes.root} id ="two-options"> 
            <ImageCard CardContents={CardContents[0]} checked = {checked}/>
            <ImageCard CardContents={CardContents[1]} checked= {checked}/>

        </div>
    );
}