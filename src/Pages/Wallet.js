import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import { db } from "../firebase";
import { Button, Modal, TextField } from "@material-ui/core";
import { CryptoState } from "../CryptoContext";
import {
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { numberWithCommas } from "../components/CoinsTable";
import ClearIcon from "@mui/icons-material/Clear";
import EditOffIcon from "@mui/icons-material/EditOff";
import { useHistory } from "react-router-dom";

const Wallet = () => {
  const history = useHistory();
  const { user, setAlert, portfolio, coins, symbol } = CryptoState();
  console.log(portfolio, coins);
  const useStyles = makeStyles({
    row: {
      backgroundColor: "white",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#E8E8E8",
      },
      fontFamily: "Montserrat",
    },
    bottomRow: {
      backgroundColor: "white",
      cursor: "pointer",
    },
    tolist: {
      cursor: "pointer",
      color: "#4949BC",
    }
  });
  const classes = useStyles();
  const total = Object.keys(portfolio).reduce((acc, fieldName) => {
    return (
      acc + Number(portfolio[fieldName][0]) * Number(portfolio[fieldName][1])
    );
  }, 0);

  // const totalProfit = Object.keys(portfolio).reduce((acc, fieldName) => {
  //   return (
  //     acc + (Number(portfolio[fieldName][0]) * Number(portfolio[fieldName][1])-Number(portfolio[fieldName][0]) * fieldName.current_price).toFixed(2)
  //   );
  // }, 0);

  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h1>Your Wallet</h1>
      </div>

        <h4 className={classes.tolist} onClick={() => history.push(`/`)}>Add new coin from list</h4>


      <TableContainer
        component={Paper}
        align="center"
        style={{ width: "80%" }}
      >
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#E8E8E8" }}>
            <TableRow >
              {[
                "Coin",
                "Quantity",
                "Price per coin",
                "Total",
                "Profit",
                "Destroy",
              ].map((head) => (
                <TableCell
                  style={{
                    color: "black",
                    fontWeight: "700",
                    fontFamily: "Montserrat",
                  }}
                  key={head}
                  // align={head === "Coin" ? "" : "right"}
                  align={head === "Coin" ? "" : "left"}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {coins.map((coin) => {
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
              };
              if (Object.keys(portfolio).includes(coin.id)) {
                return (
                  <TableRow key={coin.id} className={classes.row}>
                    <TableCell
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: 17,
                      }}
                    >
                      <img
                        src={coin?.image}
                        alt={coin.name}
                        height="32"
                        style={{ marginRight: "5px" }}
                      />{" "}
                      {coin.name}
                    </TableCell>
                    <TableCell>{portfolio[coin.id][0]}</TableCell>
                    <TableCell>{portfolio[coin.id][1]}</TableCell>
                    <TableCell>
                      {Number(portfolio[coin.id][0]) *
                        Number(portfolio[coin.id][1])}
                    </TableCell>
                    <TableCell
                      style={{
                        color:
                          Number(portfolio[coin.id][0]) *
                            Number(portfolio[coin.id][1]) -
                            Number(portfolio[coin.id][0]) * coin.current_price <
                          0
                            ? "rgb(14, 203, 129)"
                            : "red",
                      }}
                    >
                      {Math.abs(
                        (
                          Number(portfolio[coin.id][0]) *
                            Number(portfolio[coin.id][1]) -
                          Number(portfolio[coin.id][0]) * coin.current_price
                        ).toFixed(2)
                      )}
                    </TableCell>
                    <TableCell onClick={removeCities}>
                      <EditOffIcon />
                    </TableCell>
                  </TableRow>
                );
              } else {
                return <></>;
              }
            })}
            <TableRow className={classes.bottomRow}>
              <TableCell style={{ fontWeight: "bold", fontSize: 20 }}>
                Overall
              </TableCell>
              <TableCell />
              <TableCell />
              <TableCell style={{color: "#4949BC"}}>{total}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Wallet;
