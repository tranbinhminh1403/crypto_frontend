import { Box, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { CryptoState } from '../../CryptoContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


export const Signup = ({ handleClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { setAlert } = CryptoState();
    const handleSubmit = async() => {
        if(password !== confirmPassword){
            setAlert({
                open: true,
                message: "Passwords do not match",
                type: "error",
            });
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(auth,email,password);
            console.log(result);
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


  return (
    <Box 
        p={3}
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
    }}>
      <Box></Box>
      <Box></Box>
        <TextField
        variant="standard"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "80%", alignSelf: "center"}}
      />
      <TextField
        variant="standard"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "80%", alignSelf: "center"}}
      />
      <TextField
        variant="standard"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ width: "80%", alignSelf: "center"}}
      />
      <Box></Box>
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#4949BC", color: "white" }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>

    </Box>
  )
}
