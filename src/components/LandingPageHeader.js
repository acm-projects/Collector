import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import { Home, ExpandMore } from "@material-ui/icons";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
    fontFamily: "Archivo",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    fontSize: "3rem",

  },
  icon: {
    color: "#fff",
    fontSize: "3rem",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "Archivo",
    fontSize: "2rem",
  },
  goDown: {
    color: "#fff",
    fontSize: "3rem",
  },
}));
export default function App() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>Collector</h1>
          <IconButton>
            <Home className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            <h1>
              Welcome to <br /> Collector
            </h1>
          </h1>
          <Scroll to="two-options" smooth={true}>
            <IconButton>
              <ExpandMore className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
