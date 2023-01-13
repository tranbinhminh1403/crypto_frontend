import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "2px solid #4949BC",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "#4949BC" : "",
      color: selected ? "white" : "black",
      fontWeight: selected ? 700 : 600,
      "&:hover": {
        backgroundColor: "#4949BC",
        color: "white",
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
