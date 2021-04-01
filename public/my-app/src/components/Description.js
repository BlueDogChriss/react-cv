import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core/"
import Grid from "@material-ui/core/Grid"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Navbar from "./Navbar";

//-------------------------------CSS-Section-Start-------------------------------//

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
//-------------------------------CSS-Section-End-------------------------------//




const Description = () => {

    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <Box component="header">
            <Typography variant="h3" align="center">COX</Typography>
        </Box>
        <Box>
            <Grid container spacing={10}> 
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="da"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="da"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="da"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="da"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="da"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="da"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="da"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="da"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Grid>
        </Box>
        </>
    )

}

export default Description
