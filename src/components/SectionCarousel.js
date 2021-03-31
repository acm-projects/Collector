import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ImageCard from './CarouselCard'
import CardContents from '../static/carouselContents';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 3000,
  },
});
function Example(props)
{
    var items = [
        {
            name: "Poekmon Cards",
            description: "Check out amazing Pokemon Cards at even better prices",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-%C3%.svg.png",
        },
        {
            name: "Yu Gi Oh Cards",
            description: "Check out great Yu Gi Oh Cards at great prices",
            imageURL: "https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Nintendo%20Switch/Games/Third%20Party/Yu-Gi-Oh%20Legacy%20of%20the%20Duelist%20Link%20Evolution/Video/posters/Yu-Gi-Oh_Legacy_of_the_Duelist_Link_Evolution"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
  const classes = useStyles();
    return (
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="340"
          image={props.item.imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See Now
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    )
}
export default Example;