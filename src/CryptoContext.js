import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CoinList } from "./config/api";
import { auth, db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: " ",
    type: "success",
  });
  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user?.uid);
      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          console.log(coin.data().coins);
          setWatchlist(coin.data().coins);
        } else {
          console.log("No Items in Watchlist");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  const [portfolio, setPortfolio] = useState([])
    useEffect(() => {
        if (user) {
          const coinRef = doc(db, "cities", user?.uid);
          var portSnap = onSnapshot(coinRef, (coin) => {
            if (coin.exists()) {
              console.log(coin.data());
              setPortfolio(coin.data());
            } else {
              console.log("Unavailable");
            }
          });
    
          return () => {
            portSnap();
          };
        }
      }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth,user => {
      if(user)setUser (user);
      else setUser(null);

      console.log(user);
    })
  },[])

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (currency === "VND") setSymbol("Đ");
    else if (currency === "USD") setSymbol("$");
    fetchCoins();
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol, coins, loading, fetchCoins, alert, setAlert, user, watchlist, portfolio }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
