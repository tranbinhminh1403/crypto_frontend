import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { CryptoState } from "../CryptoContext";

const ChartLine = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [flag,setflag] = useState(false);

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "55%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      padding: 0,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setflag(true);
    setHistoricData(data.prices);
  };

  console.log(coin);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicData | flag===false ? 
        (
          <CircularProgress width={1}
            style={{ color: "gold" }}
            size={0}
            thickness={0}/>
        ) : (
          <>
            <Line
              style={{alignContent: "center"}}
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time = date.getDay()
                    // date.getHours() > 12
                    //   ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    //   : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    // label: `Price ( Past ${days} Days ) in ${currency}`,
                    
                    // borderWidth: 4,
                    borderWidth: 0.7,
                    borderColor: "green",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 0,
                  },
                },
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  }
                },
                animation: {
                  duration: 0,
                },
                responsive: true,
              }}
            />
          </>
        )
      }
      </div>
    </ThemeProvider>
  );
};

export default ChartLine;
