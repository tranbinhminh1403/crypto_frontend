import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Avatar, Button, Fade } from "@material-ui/core";
import { CryptoState } from "../../CryptoContext";
import { signOut } from "firebase/auth";
import { auth, db, upload } from "../../firebase";
import { numberWithCommas } from "../CoinsTable";
import { AiFillDelete } from "react-icons/ai";
import { doc, setDoc } from "firebase/firestore";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import PublishIcon from '@mui/icons-material/Publish';
import LinkIcon from '@mui/icons-material/Link';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: 350,
    padding: 25,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "monospace",
  },
  profile: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    height: "92%",
  },
  logout: {
    height: "8%",
    width: "100%",
    backgroundColor: "#4949BC",
    marginTop: 20,
    color: "white",
  },
  picture: {
    width: 200,
    height: 200,
    cursor: "pointer",
    backgroundColor: "white",
    objectFit: "contain",
  },
  watchlist: {
    flex: 1,
    width: "100%",
    backgroundColor: "grey",
    padding: 15,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
    overflowY: "scroll",
  },
  coin: {
    padding: 10,
    color: "black",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paper: {
    justifyContent: 'center',
    width: 800,
    height: 400,
    backgroundColor: "#D3D3D3",
    color: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divide: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "40px",
    color: "black",
    paddingTop: 0,
  },
  upload: {
    width: "50%",
    color: "black",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "10%",
    fontWeight: "bold",
    fontSize: "20px",
  },
  link: {
    width: "50%",
    color: "black",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "25%",
    fontWeight: "bold",
    fontSize: "20px",
  }
});

export default function UserSidebar() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    right: false,
  });
  const { user, setAlert, watchlist, coins, symbol } = CryptoState();

  console.log(watchlist, coins);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut = () => {
    signOut(auth);
    setAlert({
      open: true,
      type: "success",
      message: "Logout Successfull !",
    });

    toggleDrawer();
  };

  const removeFromWatchlist = async (coin) => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((wish) => wish !== coin?.id) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} Removed from the Watchlist !`,
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL,setPhotoURL] = useState();
  useEffect(() => {
    if (user?.photoURL) {
      console.log(user);
      setPhotoURL(user.photoURL);
    }
  });

  function handleClick() {  
    upload(photo, user, setLoading);
  }

  function handleChange(e) {
    if (e.target.file[0]) {
      setPhotoURL(e.target.file[0]);
    }
  }

  const handlePortfolioClick = () => {
    history.push('/portfolio');
    toggleDrawer();
  };
  
  const logoutChange = () => {
    history.push('/');
    logOut();
  };
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 38,
              width: 38,
              marginLeft: 15,
              cursor: "pointer",
              backgroundColor: "white",
            }}
            src={user.photoURL}
            alt={user.displayName || user.email}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className={classes.container}>
              <div className={classes.profile}>
                <Avatar
                  className={classes.picture}
                  src={user.photoURL}
                  alt={user.displayName || user.email}
                />
                {/* <Button onClick={handleOpen}>Update avatar</Button> */}
                <span
                  style={{
                    width: "100%",
                    fontSize: 25,
                    textAlign: "center",
                    fontWeight: "bolder",
                    wordWrap: "break-word",
                  }}
                >
                  {user.displayName || user.email}
                </span>
                <div className={classes.watchlist}>
                  <span style={{ fontSize: 15, textShadow: "0 0 5px black" }}>
                    Watchlist
                  </span>
                  {coins.map((coin) => {
                    if (watchlist.includes(coin.id))
                      return (
                        <div className={classes.coin} onClick={() => window.open(`/coins/${coin.id}`, "_blank")}>
                          <span>{coin.name}</span>
                          <span style={{ display: "flex", gap: 8 }}>
                            {symbol}{" "}
                            {numberWithCommas(coin.current_price.toFixed(2))}
                            <AiFillDelete
                              style={{ cursor: "pointer" }}
                              fontSize="16"
                              onClick={() => removeFromWatchlist(coin)}
                            />
                          </span>
                        </div>
                      );
                    else return <></>;
                  })}
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.logout}
                onClick={handlePortfolioClick}
                onClose={handleClose}
              >
                Wallet
              </Button>
              <Button
                variant="contained"
                className={classes.logout}
                onClick={logoutChange}
              >
                Log Out
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              {/* <div className={classes.title}>Choose a method</div>
              <div className={classes.divide}>
                <div className={classes.upload} onClick={handleClick}><PublishIcon style={{ fontSize: 100 }}/> Upload from computer </div>
                <div className={classes.upload}><LinkIcon style={{ fontSize: 100 }}/> Upload by url</div>
              </div> */}
              <input type="file" onChange={handleChange}/>
              <button disabled={loading || !photo} onClick={handleClick}> upload </button>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
