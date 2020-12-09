import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import React, { useContext, useState } from "react";
import storeApi from "../../utils/storeApi";

const useStyle = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
  btnConfirm: {
    background: "#5aac44",
    color: "#fff",
    "&:hover": {
      background: fade("#5aac44", 0.75),
    },
  },
}));

export default function InputCard({ setOpen, listId }) {
  const classes = useStyle();
  const { addMoreCard } = useContext(storeApi);
  const [cardTitle, setCardTitle] = useState("");

  const handleOnChange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleBlur = () => {
    setOpen(false);
    // setCardTitle("");
  };

  const handleClear = () => {
    setOpen(false);
    setCardTitle("");
  };

  const handleBtnConfirm = () => {
    addMoreCard(cardTitle, listId);
    setOpen(false);
    setCardTitle("");
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            multiline
            onBlur={handleBlur}
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            value={cardTitle}
            placeholder="Enter a title of this card..."
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          Add Card
        </Button>
        <IconButton onClick={handleClear}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
