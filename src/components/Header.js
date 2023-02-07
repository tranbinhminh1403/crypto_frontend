import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "black",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    color: "white",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency, user } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar style={{ background: '#4949BC' }} position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h4"
              className={classes.title}
            >
              RailsCrypto
            </Typography>

            {/* <Typography 
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
            </Typography> */}

            {/* <Button color="inherit">Login</Button> */}
            <Select
              variant="standard"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                ...theme.colors,
                  text: 'orangered',
                  primary25: 'hotpink',
                  primary: 'black',
                },
              })}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"VND"}>VND</MenuItem>
            </Select>

            {user? <UserSidebar/> :<AuthModal/>}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
