import React, { Component, useState } from "react";
import SidebarButton from "./components/SidebarButton";
import { ReactComponent as AccountIcon } from "./assets/icons/Group408.svg";
import { ReactComponent as ProperyIcon } from "./assets/icons/Path3348.svg";
import { ReactComponent as ServicesIcon } from "./assets/icons/Group409.svg";
import "./Sidebar.css";

export default function Sidebar(props: any) {
  const [accountDone, setAccountDone] = useState(props.accountDone);
  const [propertyDone, setPropertyDone] = useState(props.propertyDone);
  const sidebarButtons = [
    {
      icon: AccountIcon,
      label: "Create Account",
      viewBox: "0 0 73.419 73.795",
      disabled: accountDone,
      done: accountDone,
    },
    {
      icon: ProperyIcon,
      label: "Property details",
      viewBox: "0 0 82.774 107.894",
      disabled: propertyDone || !accountDone,
      done: propertyDone,
    },
    {
      icon: ServicesIcon,
      label: "Select services",
      viewBox: "0 0 74.278 75.33",
      disabled: !(accountDone && propertyDone) || !accountDone,
      done: propertyDone,
    },
  ];
  return (
    <div className="sidebar-container">
      {sidebarButtons.map((button, index) => {
        return (
          <SidebarButton
            children={{
              icon: button.icon,
              label: button.label,
              number: index + 1,
              viewBox: button.viewBox,
              disabled: button.disabled,
              done: button.done,
            }}
          />
        );
      })}
    </div>
  );
}
