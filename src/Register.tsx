import {
  Button,
  Checkbox,
  createMuiTheme,
  ThemeProvider,
  FormControlLabel,
  FormControl,
  Input,
  InputAdornment,
} from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import CountrySelect from "./components/CountrySelect";
import { ReactComponent as AcountIcon } from "./assets/icons/icon-account.svg";
import { ReactComponent as MailIcon } from "./assets/icons/icon-mail.svg";
import { ReactComponent as PadlockIcon } from "./assets/icons/icon-padlock.svg";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { blue, green } from "@material-ui/core/colors";
import "./Register.css";
import { CheckCircle, ArrowRightAlt } from "@material-ui/icons";

const innerTheme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

function Register(props: any) {
  const [done, setDone] = useState(props.done);
  return (
    <div hidden={done} className="register-container">
      <header>
        <h3>Create your account today</h3>
        <span>Make easy in 3 steps</span>
      </header>

      <form noValidate autoComplete="off" className="register-form">
        <ThemeProvider theme={innerTheme}>
          <FormControl required={true}>
            <Input
              placeholder="Name & Surname"
              className="form-input-field"
              startAdornment={
                <InputAdornment position="start">
                  <AcountIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl required={true}>
            <Input
              placeholder="Email"
              className="form-input-field"
              startAdornment={
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl required={true}>
            <Input
              placeholder="Password"
              type="password"
              className="form-input-field"
              startAdornment={
                <InputAdornment position="start">
                  <PadlockIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl required={true}>
            <CountrySelect />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                icon={<CircleUnchecked />}
                checkedIcon={<CheckCircle />}
              />
            }
            label="I agree the Terms of Service"
          />
        </ThemeProvider>

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
          onClick={() => setDone(true)}
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
            <span>Register</span>
          </div>
        </Button>
      </form>
    </div>
  );
}
export default Register;
