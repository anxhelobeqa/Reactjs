import { Button, FormControl, Input, InputAdornment } from "@material-ui/core";
import React, { Component, useState } from "react";
import "./Property.css";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Rating } from "@material-ui/lab";
import { ArrowRightAlt } from "@material-ui/icons";
import { blue } from "@material-ui/core/colors";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Property(props: any) {
  const [done, setDone] = useState(props.done);
  const [display, setDisplay] = useState(props.done);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const propertyButtons = [
    {
      label: "Hotel",
      icon: "hotel.png",
    },
    {
      label: "Hotel Group",
      icon: "hotel1.png",
    },
    {
      label: "Apart-hotel",
      icon: "flat.png",
    },
    {
      label: "Motel",
      icon: "motel.png",
    },
  ];
  return (
    <div hidden={!display && done} className="container">
      <header>
        <h3>What kind of property do you have?</h3>
        <span>Select type of property for an easy setup</span>
      </header>
      <div className="content">
        {propertyButtons.map((button) => (
          <Button
            variant="contained"
            disableElevation
            onClick={handleClickOpen}
          >
            <div className="property-button">
              <span>{button.label}</span>
              <img src={button.icon} />
            </div>
          </Button>
        ))}
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <MuiDialogTitle style={{ marginLeft: "auto" }} disableTypography>
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <DialogContent className="form-content">
          <FormControl required={true}>
            <Input
              placeholder="Add you hotel name"
              className="form-input-field"
            />
          </FormControl>
          <FormControl required={true}>
            <Input placeholder="Address" className="form-input-field" />
          </FormControl>
          <FormControl required={true}>
            <Input placeholder="City" className="form-input-field" />
          </FormControl>
          <FormControl required={true}>
            <Input placeholder="Zip Code" className="form-input-field" />
          </FormControl>
          <Rating name="simple-controlled" value={5} />
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              padding: 10,
              borderRadius: 100,
              fontWeight: 700,
              backgroundColor: blue[500],
              color: "#fff",
              width: 500,
            }}
            variant="contained"
            disableElevation
            onClick={() => {
              setDone(true);
              handleClose();
            }}
          >
            <div style={{ position: "relative" }}>
              <ArrowRightAlt
                style={{
                  position: "absolute",
                  left: -30,
                  top: -1,
                  fontWeight: 300,
                }}
              />
              <span>Add theese details</span>
            </div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
