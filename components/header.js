import React from "react";
import { useRouter } from "next/router";
import { IconButton, AppBar, Toolbar } from "@material-ui/core";
import Styles from "../styles/Header.module.css";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import SideMenu from "./sideMenu";

function GlsHeader() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <nav className={Styles.rootNav}>
      <AppBar className={Styles.logoCont} position="static">
        <Toolbar>
          <div>
            <IconButton onClick={handleBack}>
              <KeyboardBackspaceIcon className={Styles.logoContIcon} />
            </IconButton>
          </div>
          <div className={Styles.logoContBox}>
            {router.pathname.includes("gls") ? (
              <img className={Styles.logo} alt="Logo" src="/gls.svg" />
            ) : (
              <></>
            )}
          </div>
          <div className={Styles.menuRoot}>
            <SideMenu />
          </div>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default GlsHeader;
