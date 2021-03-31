import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"
import {
    ArrowBack,
    Work,
    Description,
    GitHub,
    ContactMail

} from "@material-ui/icons"
import avatar from "../profilepic.jpg"

//-------------------------------CSS-Section-Start-------------------------------//
const useStyles = makeStyles(theme=>({
    sliderContainer:{
        width: 350,
        height: "30rem",
        background: "#023047"
    },
    avatar:{
        display:"block", 
        margin: "1rem auto",
        width:theme.spacing(15),
        height:theme.spacing(15)
    }
}));

//-------------------------------CSS-Section-End-------------------------------//

//-------------------------------Menu-Section-Start-------------------------------//

const menuComponents = [
    {
        listIcon: <Description/>,
        listText: "Breif Description"
    },
    {
        listIcon: <Work/>,
        listText: "Experience"
    },
    {
        listIcon: <GitHub/>,
        listText: "Personal Projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
    }
]

//-------------------------------Menu-Section-End-------------------------------//


const Navbar = () => {
    const classes = useStyles()
    return (
        <>
        <Box className={classes.sliderContainer} component="pic-wrapper">
        <Avatar className={classes.avatar} src={avatar} alt="Munteanu Cristian" />
        <Divider/>
        <List>
            {menuComponents.map((lsItem,key)=>(
            <ListItem button key={key}>
                <ListItemIcon>
                    {lsItem.listIcon}
                </ListItemIcon> 
                <ListItemText primary={lsItem.listText}/>

                </ListItem>
            ))}
            

        </List>
        </Box>
        <Box component="nav">
            <AppBar position="static" style={{background: "#8ECAE6"}}>
                <Toolbar>
                    <IconButton>
                         <ArrowBack style={{color: "#023047"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "#023047"}}> 
                    Munteanu Cristian Personal CV
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
