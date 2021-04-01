import React from 'react'
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core/"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import picture from "../contact.jpg"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: 345,
      position:"absolute",
    //   background:"#8ecae6",
      top:"50%",
      left:"50%",
      transform:"translate(-50%, -50%)",
      width:"100vw",
      textAlign:"center",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    titleName:{
        color:"#023047",
        fontWeight:"bold"
    },
    subTextColor:{
        color:"#fb8500",
        fontWeight:"bold",
        textAlign:"Left"
    },
    spacingIcons:{
        alignItems: 'center',
        textAlign:"center"
    },
    fbIcon:{
        color:"#4267B2"
    },
    igIcon:{
        color:"#833AB4"
    },
    ldIcon:{
        color:"#0e76a8"
    },
    ghIcon:{
        color:"black"
    }
  }));


const Contacts = () => {
    const classes = useStyles();
    return (
       <>
       <Navbar/>
       <Box>
       <Card className={classes.card}>
      <CardHeader className={classes.titleName}
        title="CONTACT INFORMATION"
      />
      <CardMedia
        className={classes.media}
        image={picture}
        title="Munteanu Cristian"
      />
      <CardContent>
        <Typography variant="body2" className={classes.subTextColor} component="p">
        <br/>
        -Cell: 0732 918 508<br/>
        -Email: munteanu.cristian1009@gmail.com<br/>
        -Address: Pitești, Str. Nucului No. 10B
        </Typography>
      </CardContent>
      <CardActions className={classes.spacingIcons} >
        <IconButton className={classes.fbIcon} aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100010066502515">
          <FacebookIcon />
        </IconButton>
        <IconButton className={classes.igIcon} aria-label="Instagram" href="https://www.instagram.com/cris_munti/?hl=ro">
          <InstagramIcon />
        </IconButton>
        <IconButton className={classes.ldIcon} aria-label="LinkedIn" href="https://www.linkedin.com/in/cristian-munteanu-8009b91b8/">
          <LinkedInIcon />
        </IconButton>
        <IconButton className={classes.ghIcon} aria-label="GitHub" href="https://github.com/BlueDogChriss">
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
       </>
    )
}

export default Contacts
