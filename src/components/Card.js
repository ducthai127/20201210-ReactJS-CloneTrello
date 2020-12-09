import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
}));

export default function Card({ card }) {
  const classes = useStyle();

  return (
    <div>
      <Paper className={classes.card}>{card.title}</Paper>
    </div>
  );
}
