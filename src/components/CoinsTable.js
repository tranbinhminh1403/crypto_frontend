import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { CoinList } from "../config/api";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import ChartLine from "./tableChart";
import StarBorderIcon from '@mui/icons-material/StarBorder';


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable() {
  // const [coins, setCoins] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol, coins, loading, fetchCoins } = CryptoState();

  const useStyles = makeStyles({
    row: {
      backgroundColor: "#efefef",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#E8E8E8",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "black",
      },
    },
  });

  const classes = useStyles();
  const history = useHistory();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
      type: "light",
    },
  });

  // const fetchCoins = async () => {
  //   setLoading(true);
  //   const { data } = await axios.get(CoinList(currency));
  //   console.log(data);

  //   setCoins(data);
  //   setLoading(false);
  // };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  //search
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center"}}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat", width: "1200px", color: "black" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper} align="center" >
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table aria-label="simple table"  >
              <TableHead style={{ backgroundColor: "#E8E8E8"}}>
                <TableRow style={{width: "2000px"}}>
                  {[" ","#","Coin", "Price", "24h%","Volume", "Market Cap", "Last 24h"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      // align={head === "Coin" ? "" : "right"}
                      align={head === "#" ? "" : "left"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => history.push(`/coins/${row.id}`)}
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell>
                          <StarBorderIcon/>
                        </TableCell>

                        <TableCell>
                          {row?.market_cap_rank}
                        </TableCell>

                        <TableCell
                          // component="th"
                          // scope="row"
                          
                          // style={{
                          //   display: "flex",
                          //   gap: 15,
                          //   maxWidth: "100px"
                          // }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="40"
                            // style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            {/* <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span> */}
                          </div>
                        </TableCell>

                        <TableCell align="left">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        
                        <TableCell
                          align="left"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>

                        <TableCell align="left">
                          {symbol}{" "}
                          {numberWithCommas(row.total_volume.toFixed(2))}
                        </TableCell>

                        <TableCell align="left">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>

                        <TableCell align="center" style={{flex:1}} >
                        <ChartLine coin={row} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Comes from @material-ui/lab */}
        <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
