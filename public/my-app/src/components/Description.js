import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core/"
import Grid from "@material-ui/core/Grid"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Navbar from "./Navbar";
import softskils from "../images/softskils.jpg"
import hardskils from "../images/hardskils.jpg"
import language from "../images/language.jpg"
import hobbies from "../images/hobbies.jpg"

//-------------------------------CSS-Section-Start-------------------------------//

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      background:"whitesmoke",
      marginTop:"2rem"
    },
    media: {
      height: 140,
    },
    titluIdk:{
      color: "#023047",
      fontWeight: "bold",
      paddingTop:"2rem"
    },
    gridContainer:{
      paddingLeft:"30px",
      paddingRight:"30px",
      paddingTop:"2rem"
    },
    titleColor: {
      color:"#fb8500",
      fontWeight:"bold"

      
    },
    subTitleColor: {
      color: "#023047",
      fontWeight:"bold"
    }
  });
//-------------------------------CSS-Section-End-------------------------------//
//#8ecae6
//#219ebc
//#023047
//#ffb703
//#fb8500



const Description = () => {

    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <Box component="header">
            <Typography variant="h3" align="center" className={classes.titluIdk}>Brief Description</Typography>
        </Box>
        <Box>
            <Grid container spacing={12} className={classes.gridContainer} align="center"> 
            <Grid item sm={6} md={6}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="HardSkils"
          height="120"
          image={softskils}
          title="HardSkills"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleColor}>
          EDUCATIONAL HISTORY
          </Typography>
          <Typography variant="body1" className={classes.subTitleColor} component="p">
          01/10/2019 - present: The BucharestUniversity of Economic Studies
          </Typography>
          <Typography variant="body2" component="p">
          Faculty of Economic Cybernetics, Statisticsand Informatics
          Specialization -
          Economic Informatics
          </Typography>
          <Typography variant="body1" className={classes.subTitleColor} component="p">
          10/09/2015-25/05/2019: "Ion C. Brătianu"
          </Typography>
          <Typography variant="body2" component="p">
          Specialization: - Natural Science
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Grid>
    <Grid item sm={6} md={6}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="da"
          height="120"
          image={hardskils}
          title="da"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleColor}>
          CAREER GOALS
          </Typography>
          <Typography variant="body1" className={classes.subTitleColor} component="p">
          A personal goal of mine is to learna lot of things about programingand Web Development .Additionally, I like to t
each peopleand learn from others. I want tobroaden my knowledge as muchas I can while I am still young.          </Typography>
          {/* <Typography variant="body2" component="p">
          Faculty of Economic Cybernetics, Statisticsand Informatics
          Specialization -
          Economic Informatics
          </Typography>
          <Typography variant="body1" className={classes.subTitleColor} component="p">
          10/09/2015-25/05/2019: "Ion C. Brătianu"
          </Typography>
          <Typography variant="body2" component="p">
          Specialization: - Natural Science
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>  
    </Card>
    </Grid>
    <Grid item ssm={6} md={6}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="da"
          height="120"
          image={language} 
          title="da"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleColor}>
          LANGUAGES
          </Typography>
          <Typography variant="body1" className={classes.subTitleColor} component="p">
          Native Language :          </Typography>
          <Typography variant="body2" component="p">
          Romanian
          </Typography>
          <Typography variant="body1" className={classes.subTitleColor} component="p">
          Other languages:
          </Typography>
          <Typography variant="body2" component="p">
          <span>English: C1</span><br/>
          *Listening C1; <br/>
          *Use of English C1;<br/>
          *Reading C1;<br/>
          *Speaking C2;<br/>
          *Writing B2<br/>
          <span>French: A2</span><br/>
          *Listening A2; <br/>
          *Reading A2;<br/>
          *Speaking A1;<br/>
          *Writing A2<br/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Grid>
    <Grid item sm={6} md={6}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="da"
          height="120"
          image={hobbies}
          title="da"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleColor}>
          SKILLS & ABILITIES
          </Typography>
          <Typography variant="body1" className={classes.subTitleColor} component="p">
          Soft skills:          </Typography>
          <Typography variant="body2" component="p">
          - Motivated, well-disciplined individual<br/>
          - Finds joy in assisting others<br/>
          - Teamwork<br/>
          - Autodidact<br/>
          - Public Speaking<br/>
          - Communicative<br/>
          </Typography>
          <Typography variant="body1" className={classes.subTitleColor} component="p">
          Hard skills
          </Typography>
          <Typography variant="body2" component="p">
          * C/C++ and OOP concepts,<br/>
          * HTML,<br/>
          * CSS/SCSS,<br/>
          * JavaScript,<br/>
          * Python,<br/>
          * ReactJS,<br/>
          * VUE,<br/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
        </Box>
        </>
    )

}

export default Description
