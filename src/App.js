import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Footer from "./components/Footer/Footer";
import ResponsiveAppBar from "./components/header1";
import Alert from "./components/Alert";
import Wallet from "./Pages/Wallet";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#efefef",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        {/* <ResponsiveAppBar/> */}
        <Header/>
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/portfolio" component={Wallet} exact />
        {/* <Route path="/signup" component={SignUp} exact />
        <Route path="/login" component={LogIn} exact /> */}
      </div>
      <Alert/>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
