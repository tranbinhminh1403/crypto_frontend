import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Select } from "@material-ui/core";
import { CryptoState } from "../CryptoContext";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const pages = ['Sign In', 'Log In', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { currency, setCurrency } = CryptoState();

  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
    select: {
      '&:before': {
          borderColor: 'white',
      },
      '&:after': {
          borderColor: 'white',
      },
      '&:not(.Mui-disabled):hover::before': {
          borderColor: 'white',
      },
  },
  icon: {
      fill: 'white',
  },
  root: {
      color: 'white',
  },
  }));
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
              onClick={() => history.push(`/`)}
              variant="h4"
              className={classes.title}
            >
              RailsCrypto
            </Typography>

            <Typography 
              onClick={() => history.push(`/signup`)}
              variant="string"
              className={classes.title}
              align="right"
              // style={{color:"#00adb5"}}
            >
              Sign Up
            </Typography>

            <Typography 
              onClick={() => history.push(`/login`)}
              variant="string"
              className={classes.title}
              align="center"
              // style={{color:"#00adb5"}}
            >
              Log In
            </Typography>

            {/* <Button color="inherit">Login</Button> */}
            <Select align = "left"
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15,borderColor: 'yellow' }}
              onChange={(e) => setCurrency(e.target.value)}
              inputProps={{
                classes: {
                    icon: classes.icon,
                    root: classes.root,
                },
            }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"VND"}>VND</MenuItem>
            </Select>

          {/* <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu 
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;