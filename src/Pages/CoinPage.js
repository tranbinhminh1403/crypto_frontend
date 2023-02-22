import React from "react";
import { Button, LinearProgress, makeStyles, Modal, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../components/CoinsTable";
import { CryptoState } from "../CryptoContext";
import { FunctionsTwoTone } from "@mui/icons-material";
import { doc, setDoc, onSnapshot, FieldValue, updateDoc, FieldPath, deleteField } from "firebase/firestore";
import { db } from "../firebase";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol, user, setAlert, watchlist, portfolio } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  // function addToWatchlist() {
  //   alert('Watchlist added');
  // }
  const inWatchlist = watchlist.includes(coin?.id);

  const addToWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist ? [...watchlist, coin?.id] : [coin?.id] },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} is added to the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  const removeFromWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((wish) => wish !== coin?.id) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} is removed from the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));

  const classes = useStyles();

  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inCities = portfolio?.[coin?.id];

  const addCities = async () => {
 // Reference to the cities collection
  const citiesRef = doc(db, "cities", user.uid);
    try {
      await setDoc(
        citiesRef,
        { [coin.id]: [quantity, price] },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} is added to the Portfolio!`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
    handleClose();
  };

  const removeCities = async () => {
    const citiesRef = doc(db, "cities", user.uid);
    try {
      await updateDoc(citiesRef, {
        [coin.id]: deleteField(),
      });
  
      setAlert({
        open: true,
        message: `${coin.id} is removed from the Portfolio!`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  const removeCitiesAndClose = () => {
    removeCities();
    handleClose();
  }

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar} style={{color: "black"}}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading} >
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat",
                marginBottom: 20,
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h6" className={classes.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
                marginBottom: 20,
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h6" className={classes.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
                marginBottom: 20,
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
          {user && (
            <div>
          <Button
              variant="outlined"
              style={{
                width: "100%",
                height: 40,
                backgroundColor: inWatchlist ? "#ffffff" : "#4949BC",
              }}
              onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
            >
              {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
              {/* Add to watchlist */}
          </Button>
          <br/>

          <Button
                variant="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: inCities ? "#0ecb81" : "#4949BC",
                }}
                // onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
                onClick={handleOpen}
                // onClick={addCities}
              >
                {/* {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"} */}
                {inCities ? "Edit this coin" : "Add to portfolio"}
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{alignItems: "center", display: "flex", justifyContent: "center"}}
              >
                <div style={{background:"white", width: 500, height: 300,borderRadius: 10,display: "flex",flexDirection: "column", gap: "20px", paddingTop: 20}}>
                  <TextField
                    variant="standard"
                    type="text"
                    label="Enter the quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{
                      width: "80%",
                      alignSelf: "center",
                      color: "white",
                    }}
                  />

                  <TextField
                    variant="standard"
                    type="text"
                    label="Enter the price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    style={{
                      width: "80%",
                      alignSelf: "center",
                      color: "white",
                    }}
                  />
                  <Button
                    variant="outlined"
                    style={{
                      width: "80%",
                      height: 40,
                      backgroundColor: "#4949BC",
                    }}
                    // onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
                    // onClick={handleOpen}
                    onClick={addCities}
                  > Add to portfolio</Button>
                  {inCities ?                   <Button
                    variant="outlined"
                    style={{
                      width: "80%",
                      height: 40,
                      backgroundColor: "red",
                    }}
                    // onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
                    // onClick={handleOpen}
                    onClick={removeCitiesAndClose}
                  > Delete</Button> :<></>}
                </div>
              </Modal>
          </div>
            )}
            
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
