import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  posts: {
    width: "100%",
  },
  maincontent: {
    paddingTop: "3%",
    paddingLeft: "10%",
  },
  maincontent2: {
    paddingTop: "3%",
    paddingLeft: "10%",
    backgroundColor: "#c1c6c8",
    paddingBottom: "3%",
    marginTop: "-2%",
  },
  maincontent3: {
    paddingTop: "3%",
    paddingLeft: "10%",
    backgroundColor: "#37a1af",
    paddingBottom: "3%",
  },
  maincontent4: {
    paddingTop: "3%",
    paddingLeft: "10%",
    backgroundColor: "#ff780e",
    paddingBottom: "3%",
  },
  maincontent5: {
    backgroundColor: "#37a1af",
  },
  title1: {
    fontWeight: 700,
    fontSize: "35px",
    color: "white",
    padding: "2px 1px",
    marginBottom: 0,
  },
  content: {
    fontWeight: 300,
    width: "80%",
    paddingTop: "1%",
    fontFamily: "Roboto",
  },
  contentfont: {
    fontWeight: 400,
    fontSize: "17px",
  },
  image: {
    width: "90%",
    height: "90%",
    paddingBottom: "2%",
  },
  image2: {
    width: "70%",
    height: "30%",
    paddingBottom: "5%",
    paddingLeft: "10%",
  },
  image3: {
    width: "60%",
    height: "20%",
    paddingBottom: "3%",
    paddingLeft: "15%",
  },
  btn:{
    backgroundColor: "#37a1af",
    color: "#fff",
    border: "2px solid black",
    borderColor: "#FF780E",
    cursor: "pointer",
    paddingTop: "1%",
    marginLeft: "35%",
    paddingBottom: "1%",
    marginTop: "3%",
    width: "20%",
    textTransform: "capitalize",
  },
  btn2: {
    backgroundColor: "#FF780E",
    color: "#fff",
    border: "2px solid black",
    borderColor: "#37a1af",
    cursor: "pointer",
    paddingTop: "1%",
    marginLeft: "35%",
    paddingBottom: "1%",
    marginTop: "3%",
    width: "30%",
    textTransform: "capitalize",
  },
  list: {
    color: "white",
  },
  downloadtext: {
    fontSize: "19px",
    fontWeight: 500,
    color: "white",
    textTransform: "capitalize",
    paddingTop: "2%",
    paddingLeft: "25%",
    paddingBottom: "2%",
  },
}));

export default useStyles;
