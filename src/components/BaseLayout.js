import React, { Component } from "react";

export default class BaseLayout extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
