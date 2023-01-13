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

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "black",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
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
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="black" position="static">
        <Container>
          <Toolbar>
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
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15,borderColor: 'yellow', }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"VND"}>VND</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
