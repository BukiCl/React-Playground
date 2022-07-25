import React from "react";
import classes from "./DomainNavigation.module.css";

function DomainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>CUSTOMER APP</div>
      <nav>
        <ul>
          <li>ADD</li>
          <li>UPDATE</li>
          <li>DELETE</li>
        </ul>
      </nav>
    </header>
  );
}

export default DomainNavigation;
