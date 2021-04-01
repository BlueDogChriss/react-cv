import React from 'react'
import {
    Typography,
    Grid,
    Avatar,
    Box
} from "@material-ui/core"
import { makeStyles} from "@material-ui/core/styles"
import avatar from "../images/raccoon_logo.png"

//-------------------------------CSS-Section-Start-------------------------------//
const useStyles =makeStyles(theme=>({
avatar: {
    width:theme.spacing(30),
    height:theme.spacing(30),
    margin:theme.spacing(5),

},
pageTitle:{
    color:"#023047",
    marginTop:"3rem"
},
elemContainer:{
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%, -50%)",
    width:"100vw",
    textAlign:"center",
    zIndex:1
}
}))

//-------------------------------CSS-Section-End-------------------------------//


const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.elemContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Logo"/>
            </Grid>
            <Typography className={classes.pageTitle} variant="h1">
                          Welcome 
            </Typography>
        </Box>
    );
};

export default Header
