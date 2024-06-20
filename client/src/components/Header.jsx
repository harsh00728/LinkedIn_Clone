import React from 'react'
import {useState} from 'react'
import {Box, AppBar, Toolbar, Button, Typography, Tabs, Tab} from '@mui/material'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { authActions } from '../redux/store'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Header = () => {
  //global state.
  let isLogin= useSelector((state)=> state.isLogin);
  isLogin= isLogin || localStorage.getItem("userId");
  const dispatch= useDispatch();
  const navigate= useNavigate();

  // state.
  const [value, setValue]= useState();

  //logout function 
  const handleLogout= ()=>{
    try{
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate('/login');
      localStorage.clear();
    } catch(err){
      console.log(err);
    }
  }

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
                      <Button sx={{margin:1, color:'white'}} onClick={handleLogout}>Logout</Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header