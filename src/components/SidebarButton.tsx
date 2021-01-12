import { Button, SvgIcon } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { CheckCircle } from "@material-ui/icons";
import React, { Component } from "react";
type Props = {
  children: {
    icon: any;
    number: number;
    label: string;
    viewBox: string;
    disabled: boolean;
    done?: boolean
  };
};

class SidebarButton extends Component<Props> {
  render() {
    const { icon, number, label, viewBox, disabled, done } = this.props.children;
    return (
      <Button disabled={disabled} color="primary" className="sidebar-button">
        <div className="sidebar-button-content">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
            }}
          >
            <SvgIcon
              viewBox={viewBox}
              style={{ width: "3em", height: "3em" }}
              component={icon}
            />
            <span
              style={{
                position: "absolute",
                right: 0,
                top: -15,
                fontSize: "1.5em",
              }}
            >
              { done?
              <CheckCircle style={{color: green[500]}} />:
              number}
            </span>
          </div>
          <h3>{label}</h3>
        </div>
      </Button>
    );
  }
}

export default SidebarButton;
