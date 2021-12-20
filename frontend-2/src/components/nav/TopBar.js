import React from 'react'
import { makeStyles, Toolbar, Button } from '@material-ui/core';
import {AppBar} from '@material-ui/core';
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Navbar} from 'react-bootstrap';
    
const useStyles = makeStyles((theme)=>({     
AppBar:{
        background:'none',        
    },
    title:{
        flexGrow:1,
    },
    btn:{
        color:'#fff',
        backgroundColor:'#000' // Remember the freaking # for referencing Colours
    },
}));

export default function TopBar ({setOpenSideMenu}){
    const classes = useStyles();
    return (
        <div>
            <AppBar position = "static" 
            className={classes.AppBar} elevation={0}>
                <Toolbar>
                    
                    <Navbar.Brand href="http://localhost:3000" type = "Button" className={classes.title}>Gestion del Proyecto</Navbar.Brand>
                    <Button className ={classes.btn} 
                    onClick={()=>setOpenSideMenu(true)}> 
                        Change background
                    </Button>
                </Toolbar>             
            </AppBar>
        </div>
    );
}
