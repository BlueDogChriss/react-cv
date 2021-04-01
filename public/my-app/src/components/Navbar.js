import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
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
        height: "100%"
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
        zIndex: 0
    },
}));

//-------------------------------CSS-Section-End-------------------------------//

//-------------------------------Menu-Section-Start-------------------------------//

const menuComponents = [ 
    {
        listIcon: <Home/>,
        listText:"Main Page"
    },
    {
        listIcon: <Description/>,
        listText: "Brief Description"
    },
    {
        listIcon: <Work />,
        listText: "Experience"
    },
    {
        listIcon: <GitHub />,
        listText: "Personal Projects"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
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
        <Divider/>
        <List>
            {menuComponents.map((lsItem,key)=>(
            <ListItem button key={key}>
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
        <Box component="nav">
            <AppBar position="static" style={{background: "#8ECAE6"}}>
                <Toolbar>
                    <IconButton onClick={toggleSliderMenu("left",true)}>
                         <Menu style={{color: "#023047"}}/>
                    </IconButton>
                    <Typography className={styles.positionZindex} variant="h5" style={{color: "#023047"}}> 
                    Munteanu Cristian Personal CV
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
