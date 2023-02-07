import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const Footer = () => {
    const useStyles = makeStyles((theme) => ({
        footer: {
            background: "#4949BC",
            height: 250,
            display: "flex",
            flexDirection: "row",
            padding: 30,
        },
        c1: {
            width: "30%",
            textAlign: "center",
            fontSize: "50px",
            padding: 20,
            fontWeight: "bold",
        },
        c2: {
            width: "23%",
            textAlign: "center",
            fontSize: "30px",
            display: "flex",
            flexDirection: "column",
        },
        c3: {
            width: "23%",
            textAlign: "center",
            fontSize: "30px",
        },
        c4: {
            width: "23%",
            textAlign: "center",
            fontSize: "30px",
        },
        small: {
            fontSize: "18px",
        },
        info: {
            display: "flex",
            flexDirection: "column",
            paddingTop: 20,
        },
        title: {
            fontWeight: "bold",
        }
    }));
    const classes = useStyles();

  return (
    <div className={classes.footer}>
        <div className={classes.c1}>
            RailsCrypto
        </div>

        <div className={classes.c2}>
            <div className={classes.title}>Language</div>
            <div className={classes.info}>
                <div className={classes.small} href='https://rubyonrails.org/' target="_blank">Ruby On Rails</div>
                <div className={classes.small} href="https://reactjs.org/" target="_blank">React JS</div>
            </div>
        </div>

        <div className={classes.c3}>
            <div className={classes.title}>About Us</div>
            <div className={classes.info}>
                <div className={classes.small}> Team </div>
                <div className={classes.small}> Report</div>
            </div>
        </div>

        <div className={classes.c4}>
            <div className={classes.title}>Contact Us</div>
            <div className={classes.info}>
                <div className={classes.small} href="https://github.com/NguyenTungSon0503/RailsCrypto" target="_blank">Github</div>
                <div className={classes.small} href="https://www.facebook.com/tungson.nguyen.9699" target="_blank">Facebook</div>
                <div className={classes.small}></div>
                
            </div>
        </div>

    </div>
  )
}

export default Footer