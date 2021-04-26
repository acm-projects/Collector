import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
// core components
import Footer from "./footer";
import Header from './Header/header'
import Button from "./CustomButtons/Button.js";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem.js";
import NavPills from "../components/NavPills/NavPills.js";
import Parallax from "../components/Parallax/Parallax.js";

import profile from "../assets/img/faces/micheal.jpeg";
import post1 from "../assets/img/examples/post-1.jpg";
import post2 from "../assets/img/examples/post-2.jpg";
import post3 from "../assets/img/examples/post-3.jpg";
import post4 from "../assets/img/examples/post-4.jpg";
import post5 from "../assets/img/examples/post-5.jpeg";
import available1 from "../assets/img/examples/feature-stamp.jpg";
import available2 from "../assets/img/examples/guitar.jpg";
import available3 from "../assets/img/examples/charizard.jpeg";
import available4 from "../assets/img/examples/button.jpg";
import available5 from "../assets/img/examples/coin.jpeg";

import styles from "../assets/jss/profilePage.js";

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

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Header />
      <Parallax small filter image={require("../assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Micheal Kempner</h3>
                    <h6>Dallas, TX</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Dallas-Based collector specializing in Pokemon TCG{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="pallette.primary"
                  tabs={[
                    {
                      tabButton: "My Posts",
                      tabIcon: PhotoCameraIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={post1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={post2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={post3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={post4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={post5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Available Items",
                      tabIcon: MonetizationOnIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={available1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={available2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={available3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={available4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={available5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Trophy Case",
                      tabIcon: EmojiEventsIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={available4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={post3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={available2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={available1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={post1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </ThemeProvider>
  );
}
