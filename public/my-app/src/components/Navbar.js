import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import ResponsiveMenu from "@material-ui/core/Drawer"
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
    Menu,
    Home,
    Work,
    Description,
    GitHub,
    ContactMail

} from "@material-ui/icons"
import avatar from "../profilepic.jpg"

//-------------------------------CSS-Section-Start-------------------------------//
const useStyles = makeStyles(theme=>({
    menuSliderWrapper:{
        width: 250,
        height: "100%",
        zIndex: 100
    },
    avatar:{
        display:"block", 
        margin: "1rem auto",
        width:theme.spacing(15),
        height:theme.spacing(15)
    },
    menuText:{
        color: "#023047",
        fontWeight: "bold"
    },
    positionZindex:{
        zIndex: 100
    },
    nameText:{
        color: "#023047",
        textAlign:"center",
        fontWeight: "bold"
    },
    subText:{
        color: "#023047",
        textAlign:"center",
        fontWeight: "400"

    }

}));

//-------------------------------CSS-Section-End-------------------------------//

//-------------------------------Menu-Section-Start-------------------------------//

const menuComponents = [ 
    {
        listIcon: <Home/>,
        listText:"Main Page",
        listPath: "/"
    },
    {
        listIcon: <Description/>,
        listText: "Brief Description",
        listPath: "/description"
    },
    {
        listIcon: <Work />,
        listText: "Experience",
        listPath: "/experience"
    },
    {
        listIcon: <GitHub />,
        listText: "Personal Projects",
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contact"
    }
]

//-------------------------------Menu-Section-End-------------------------------//


const Navbar = () => {
    const [state, setState] = useState({
       left: false,
       zIndex: 100
    })

    const toggleSliderMenu = ((slider, open)=>()=>{
        setState({...state,[slider]:open});
    });

    const styles = useStyles()

    const sideList = slider =>(
        <Box className={styles.menuSliderWrapper} component="pic-wrapper"
        onClick={toggleSliderMenu(slider, false)}>
        <Avatar className={styles.avatar} src={avatar} alt="Munteanu Cristian" />
        <Typography className={styles.nameText} variant="h5">Munteanu Cristian</Typography>
        <Typography className={styles.subText} variant="h6">Student</Typography>
        <Divider/>
        <List>
            {menuComponents.map((lsItem,key)=>(
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon className={styles.menuText}>
                    {lsItem.listIcon}
                </ListItemIcon> 
                <ListItemText className={styles.menuText} primary={lsItem.listText}/>
                </ListItem>
            ))}          
        </List>
        </Box>
    )
    return (
        <>
        <Box className={styles.positionZindex} component="nav">
            <AppBar className={styles.positionZindex} position="static" style={{background: "#219ebc"}}>
                <Toolbar>
                    <IconButton onClick={toggleSliderMenu("left",true)}>
                         <Menu style={{color: "#023047"}}/>
                    </IconButton>
                    <Typography className={styles.positionZindex} variant="h5" style={{color: "#023047"}}> 
                    Menu
                    </Typography>
                    <ResponsiveMenu 
                    anchor="left"
                    open={state.left}
                    onClose={toggleSliderMenu("left",false)}>
                        {sideList("left")}
                    </ResponsiveMenu>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
