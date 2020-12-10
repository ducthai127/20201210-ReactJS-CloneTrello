import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  AppBar: {
    background: "None",
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    color: "#ddd",
    backgroundColor: "#000",
  },
}));

export default function TopBar({ setOpenSideMenu }) {
  const classes = useStyle();

  return (
    <div>
      <AppBar position="static" className={classes.AppBar} elevation={0}>
        <Toolbar>
          <h1 className={classes.title}>Daily Todo</h1>
          <Button className={classes.btn} onClick={() => setOpenSideMenu(true)}>
            Change Background
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
