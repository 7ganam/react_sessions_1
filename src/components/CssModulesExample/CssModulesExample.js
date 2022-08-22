import React, { Component } from "react";
import styles from "./stylesExample.module.css";
export default class CssModulesExample extends Component {
  render() {
    return (
      <div className="comp">
        <div className={styles.subDiv}>CssModulesExample</div>
      </div>
    );
  }
}
