import React from 'react';
import { makeStyles, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ForumIcon from '@material-ui/icons/Forum';
import ShopIcon from '@material-ui/icons/Shop';
import {createMuiTheme} from '@material-ui/core';
const theme = createMuiTheme(
  {
  palette: {
    primary: {
      light: '#5e677d',
      main: '#333d51',
      dark: '#0b1729',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffdd5e',
      main: '#d3ac2b',
      dark: '#9e7d00',
      contrastText: '#000',
    },
  },
});
const useStyles = makeStyles({
  root: {
    width: 'auto',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#333D51',
    color: '#D3AC2B',
    '&$selected': {
      color: '#D3AC2B'
  },
    primaryColor:{
        activeTintColor: '#D3AC2B',
        inactiveTintColor: '#D3AC2B',
},
  selected: {


  }


}});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      className={classes.primaryColor}
    >
      <BottomNavigationAction label="Home"
      icon={<HomeIcon color="secondary"/>} />
      <BottomNavigationAction label="Forums" icon={<ForumIcon color="secondary"/>} />
      <BottomNavigationAction label="Shop" className={classes.primaryColor} icon={<ShopIcon color="secondary" />} />
    </BottomNavigation>
    </ThemeProvider>
  );
}