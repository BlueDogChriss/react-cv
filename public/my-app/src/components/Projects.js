import React from 'react'
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core/"
import GitUser from './GitUser'

const Projects = () => {
    return (
        <>
       <Navbar/>
       <Box>
           <GitUser/>
       </Box>
       </>
    )
}

export default Projects
