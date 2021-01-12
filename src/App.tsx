import { createMuiTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import { green } from "@material-ui/core/colors";
import Register from "./Register";
import Sidebar from "./Sidebar";
import Property from "./Property";
import Services from "./Services";

const innerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  const [accountDone, setAccountDone] = useState(false);
  const [propertyDone, setPropertyDone] = useState(false);
  useEffect(() => {
    if (accountDone) {
      setAccountDone(true);
    }
  }, [accountDone]);

  return (
    <div className="page-container">
      <Sidebar accountDone={accountDone} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Register done={accountDone} />
        <Property done={propertyDone} display={accountDone} />
        <Services display={propertyDone} />
      </div>
    </div>
  );
}

export default App;
