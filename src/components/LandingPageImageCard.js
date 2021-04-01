import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Archivo",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Archivo",
    fontSize: "1.2rem",
    color: "#ddd",
  },
  button:{
    size: "large",
    fontWeight: "bold",
    fontFamily: "Archivo",
    fontSize: "1.5rem",
    background: "rgba(1,2,3,0.5)",
    color: "#fff",
  },
});

export default function ImageCard({ CardContents, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={CardContents.imageURL}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {CardContents.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              {CardContents.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={classes.button}>
            Go there
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}
