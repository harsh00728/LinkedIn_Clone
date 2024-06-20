import React from 'react'
import {useState} from 'react'
import {Box, AppBar, Toolbar, Button, Typography, Tabs, Tab} from '@mui/material'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
  const isLogin= useSelector((state)=> state.isLogin);
  const [value, setValue]= useState();
  return (
    <>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant='h4' >Connectify...</Typography>
                
                {isLogin && (
                    <Box display={'flex'} marginLeft={"auto"} marginRight={"auto"} >
                    <Tabs textColor='inherit' value={value} onChange={(e, val)=> setValue(val)} >
                        <Tab label="My Posts" LinkComponent={Link} to="/posts" />
                        <Tab label="All Posts" LinkComponent={Link} to="/all-posts" />
                        <Tab label="Create Post" LinkComponent={Link} to="/create-post" />
                    </Tabs>
                </Box>
                )}

                <Box display={'flex'} marginLeft={"auto"}>
                    {!isLogin && (
                      <>
                        <Button sx={{margin:1, color:'white'}} LinkComponent={Link} to="/login" >Login</Button>
                        <Button sx={{margin:1, color:'white'}} LinkComponent={Link} to="/register" >Register</Button>
                      </>
                    )}
                     
                    {isLogin && (
                      <Button sx={{margin:1, color:'white'}} LinkComponent={Link} to="/logout" >Logout</Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header