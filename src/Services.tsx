import {
  Button,
  Dialog,
  IconButton,
  Typography,
  useTheme,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
} from "@material-ui/core";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as ReceptionBell } from "./assets/icons/reception-bell.svg";
import { ReactComponent as Booking } from "./assets/icons/booking.svg";
import { ReactComponent as Connections } from "./assets/icons/connections.svg";
import { ReactComponent as PaymentTerminal } from "./assets/icons/payment-terminal.svg";
import { ReactComponent as DigitalMarketing } from "./assets/icons/digital-marketing.svg";
import { ReactComponent as Sprayer } from "./assets/icons/sprayer.svg";
import { ReactComponent as Tools } from "./assets/icons/tools.svg";
import { Add, ArrowRightAlt, Close } from "@material-ui/icons";
import "./Services.css";
import { blue, green, orange, red, yellow } from "@material-ui/core/colors";
import { FormControl, Input } from "@material-ui/core";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";

import { Rating } from "@material-ui/lab";
import React, { useState } from "react";

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

export default function (props: any) {
  const [done, setDone] = useState(props.done);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const services: any[] = [
    {
      name: "Reception",
      description: "booking calendar",
      icon: ReceptionBell,
      viewBox: "0 0 480 480",
      color: red[600],
    },
    {
      name: "Booking Engine",
      description: "for your website",
      icon: Booking,
      viewBox: "0 0 511.537 511.537",
      color: blue[600],
    },
    {
      name: "Channel Manager",
      description: "booking.com",
      icon: Connections,
      viewBox: "0 0 60 60",
      color: orange[600],
    },
    {
      name: "POS",
      description: "Point of Sale",
      icon: PaymentTerminal,
      viewBox: "0 0 512 512",
      color: green[600],
    },

    {
      name: "Marketing Tools",
      description: "growing up sales",
      icon: DigitalMarketing,
      viewBox: "0 0 512.001 512.001",
      color: blue[200],
    },
    {
      name: "Housekeeping",
      description: "room cleaning",
      icon: Sprayer,
      viewBox: "0 0 480 480",
      color: blue[300],
    },
    {
      name: "Maintanance",
      description: "technical services",
      icon: Tools,
      viewBox: "0 0 480 480",
      color: yellow[600],
    },
  ];
  return (
    <div>
      <div className="container">
        <header>
          <span>You can choose all of hola services for a full managment</span>
        </header>
        <div className="content">
          {services.map((service) => {
            return (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  service.selected = true;
                }}
                style={{
                  backgroundColor: service.selected ? service.color : "#fff",
                  color: service.selected ? "#fff" : service.color,
                }}
              >
                <div className="service-button">
                  <SvgIcon
                    viewBox={service.viewBox}
                    style={{
                      width: "3em",
                      height: "3em",
                    }}
                    component={service.icon}
                  />
                  <div
                    style={{
                      display: "grid",
                      color: service.selected
                        ? "#fff"
                        : theme.palette.primary.main,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.2em",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {service.name}
                    </span>
                    <span
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      {service.description}
                    </span>
                  </div>
                </div>
              </Button>
            );
          })}
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            <div className="service-button">
              <Add
                style={{
                  fontSize: "5em",
                }}
              />
            </div>
          </Button>
        </div>
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
            <span>Start your free trial now</span>
          </div>
        </Button>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <MuiDialogTitle style={{ marginLeft: "auto" }} disableTypography>
          <IconButton aria-label="close" onClick={handleClose}>
            <Close />
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
              <span>Send us your suggestion</span>
            </div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
