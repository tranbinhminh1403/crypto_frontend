import React from 'react'
import { Box, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { CryptoState } from '../../CryptoContext';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { makeStyles } from '@material-ui/core/styles';
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const Login = ({ handleClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setAlert } = CryptoState();
    const useStyles = makeStyles((theme) => ({
     
      // box: {
      //   display: 'flex',
      //   flexDirection: 'row',
      //   position: 'relative',
      // },

      // left: {
      //   width: '70%',
      //   backgroundImage: "url('./crypto.jpg')",
      //   backgroundSize: "1000px",
      // }

    }));
    const classes = useStyles();

    const handleSubmit = async() => {
        if (!email || !password) {
            setAlert({
              open: true,
              message: "Please fill all the Fields",
              type: "error",
            });
            return;
          }
          try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setAlert({
              open: true,
              message: `Sign Up Successful. Welcome ${result.user.email}`,
              type: "success",
            });
      
            handleClose();
          } catch (error) {
            setAlert({
              open: true,
              message: error.message,
              type: "error",
            });
            return;
          }

    };

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
      signInWithPopup(auth, googleProvider).then(res=>{
        setAlert({
          open: true,
          message: `Sign Up Successful. Welcome ${res.user.email}`,
          type: "success",
        });
  
        handleClose();
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
        return;
      });
    }

  return (
    
    <div className={classes.box}>
    <Box 
        p={3}
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
    }}>
        <Box></Box>
        <TextField
        variant="standard"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "80%", alignSelf: "center", color: "white" }}
      />
      <TextField
        variant="standard"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "80%", alignSelf: "center"}}
      />
      <Box></Box>
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#4949BC", color: "white" }}
        onClick={handleSubmit}
      >
        Log In
      </Button>
      <span style={{alignSelf: "center"}}>OR</span>
      <GoogleButton
        style={{ width: "80%", outline: "none", alignSelf: "center" }}
        onClick={signInWithGoogle}
      />

    </Box>
    </div>
    
  )
}
