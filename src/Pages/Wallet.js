import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { Button } from "@material-ui/core";
import { CryptoState } from "../CryptoContext";

const Wallet = () => {
  const { user, setAlert, portfolio, coins, symbol } = CryptoState();
  console.log(portfolio, coins);

  return (
    <div style={{ color: "black" }}>
      <div></div>
      <Button>test out</Button>
        {Object.keys(portfolio).map((fieldName) => (
            <div key={fieldName}>
            <p>{fieldName}</p>
            <p>{portfolio[fieldName][0]}</p>
            </div>
        ))}
      {coins.map((coin) => {
        if (Object.keys(portfolio).includes(coin.id)) 
        return (
            <span> {coin.id} </span>
        );
        else return <></>;
      })}
    </div>
  );
};

export default Wallet;
