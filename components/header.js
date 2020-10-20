import React from "react";
import { useRouter } from "next/router";
import { IconButton } from "@material-ui/core";
import Styles from "../styles/Header.module.css";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

function GlsHeader() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={Styles.GLSlogoCont}>
      <div>
        <IconButton onClick={handleBack}>
          <KeyboardBackspaceIcon className={Styles.GLSlogoContIcon} />
        </IconButton>
      </div>
      <div className={Styles.GLSlogoContBox}>
        <img className={Styles.GLSlogo} alt="glsLogo" src="/gls.svg" />
      </div>
    </div>
  );
}

export default GlsHeader;
