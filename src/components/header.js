import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        fontSize: "2rem",
        flex:1
    },
    iconStyles: {
        fontSize: "2rem"
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    Collector
                    </Typography>
                <AccountCircleIcon className={classes.iconStyles}/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
