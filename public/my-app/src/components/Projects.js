import React from 'react'
import Navbar from "./Navbar";
import {Box} from "@material-ui/core/"
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
