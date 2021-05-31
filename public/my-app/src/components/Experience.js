import React from 'react'
import Navbar from "./Navbar";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core/"


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    titlePage:{
        color:"#023047",
        textAlign: 'center',
        fontWeight:"bold",
        paddingTop: "2rem"
    },
    secondaryTail: {
      backgroundColor: "#ffb703"
    },
    name:{
        fontWeight:"bold",
        color:"#023047"
    },
    nameRight:{
        fontWeight:"bold",
        color:"#023047",
        textAlign:"right"
    },
    jobTitle:{
        color:"#219ebc",
        fontWeight:"bold"
    },
    tmlDot:{
        color:"#fb8500",
        backgroundColor:"#fb8500"
    }
  }));

  

const Experience = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <Typography variant="h4" align="left" className={classes.titlePage}>
                Work Experience
            </Typography>
        <Box>
      
        <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot className={classes.tmlDot}>
            {/* Iconita */}
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.name}>
            03/11/2019-Present 
            </Typography>
            <Typography className={classes.jobTitle}>Volunteer At Microsoft Student Parteners ASE - memberof the Promo division</Typography>
<br/>
        <Typography>
            -I have helped organizing and promoting some events:<br/>
            *Meet AXES Software,<br/>
            *A Future With Microsoft.<br/>
            -I worked in a team to create and develop some videos for the organisation.;<br/>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>

        <TimelineSeparator >
          <TimelineDot className={classes.tmlDot}>
            {/* Iconita */}
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.nameRight} >
            25/11/2019 - Present
            </Typography>
            <Typography className={classes.jobTitle}>SiSC - Sindicatul Studenților dinCibernetică:-Member of the IT department</Typography>
            <br/>
            <Typography style={{textAlign:"right"}}>
            *I have participated in training activities such as: HTML& CSS, Web Fundamentals & Git, JavaScript.<br/>
            *I had the opportunity to teach a new generation ofvolunteers the basics of Wed Design and SCSS Basics.<br/>
            *I have developed skills in website making whileworking in a team for the projects entitled "SeriileTeatrului Studentesc", "Academia Speranței", "SiSCTutoring", "Ghidul Ciberbobocului", "IT Fest".<br/>
            *I had the oppotunity to teach the subject named"Bazele Tehnologiei Informatiei" while being amember of the SiSC Tutoring team. Because of that Imanaged to take a glimpse of what it means to be anuniversity professor.<br/>
            *My curious nature and my desire to learn new thingsallowed me to get all sorts of knowledge from mycolleagues, such as SCSS, VUE and a way of thinkingand finding solutions to problems.<br/>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot className={classes.tmlDot}>
            {/* Iconita */}
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.name}>
            11/07/2020 - 11/05/2021
            </Typography>
            <Typography className={classes.jobTitle}>SiSC - Sindicatul Studenților dinCibernetică
Head of the IT Department</Typography>
<br/>
        <Typography>
            *Implementation of the department's strategy for aperiod of one year;<br/>
            *Coordinating the general activity of the departmentand its divisions throughout our projects;<br/>
            *Organizing and hosting meetings and debatesregarding our department management;<br/>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot className={classes.tmlDot}>
            {/* Iconita */}
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.name}>
            Present - Future
            </Typography>
            <Typography className={classes.jobTitle}>**SOON TO BE MORE**</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Box>
        </>
    )
}

export default Experience
