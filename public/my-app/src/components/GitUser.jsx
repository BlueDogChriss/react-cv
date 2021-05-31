import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    card:{
        maxHeight: '80vh',
        maxWidth: 550,
        position:"absolute",
        background:"#8ecae6",
        top:"55%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        width:"100vw",
        textAlign:"center", 
    },
    inline: {
        display: 'inline',
        color:"#fb8500"
    },
    titlePage:{
        color:"#023047",
        textAlign: 'center',
        fontWeight:"bold",
        paddingTop: "5rem"
    },
    name:{
        fontWeight:"bold",
        color:"#023047"
    }
}));

export default function GitHubUser() {
    const userName = 'BlueDogChriss';
    const [repos, setRepos] = useState([]);

    const classes = useStyles();

    useEffect( () => {
        fetch('https://api.github.com/users/' + userName + '/repos?sort=created')
            .then(response => response.json())
            .then(data => setRepos(data));
    }, [userName]);
//#8ecae6
//#219ebc
//#023047
//#ffb703
//#fb8500
    const listItems = repos.map((repo) =>
        <Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
                </ListItemAvatar>
                <ListItemText className={classes.name}
                    primary={repo.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                            >
                                {repo.owner.login}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </Fragment>
    );

    return (
        <div>
            <Typography variant="h4" align="left" className={classes.titlePage}>
                GitHub Projects
            </Typography>
            <Card className={classes.card}>
           
                <CardContent>
            <List className={classes.root}>{listItems}</List>
            </CardContent>
            
            </Card>
            
        </div>
    );
}
