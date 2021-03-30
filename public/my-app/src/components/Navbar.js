import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail

} from "@material-ui/icons"
import avatar from "../profilepic.jpg"

//-------------------------------CSS-Section-Start-------------------------------//
const useStyles = makeStyles({
    sliderContainer:{
        width: 350,
        height: 5000,
        background: "#023047"
    }
})
//-------------------------------CSS-Section-End-------------------------------//

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <Box className={classes.sliderContainer} component="pic-wrapper">
        <Avatar src={avatar} alt="Munteanu Cristian" />
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
