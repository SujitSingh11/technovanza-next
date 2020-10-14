import React, { useState, useEffect } from "react";
import { Grid, Container, IconButton } from "@material-ui/core";
import Styles from "../styles/PreviousGSL.module.css";
import ReactPlayer from "react-player/youtube";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import PreviousGLSCard from "../components/previousGLSCard";
import Footer from "../components/footer";

const PreviousGLS = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl("https://www.youtube.com/watch?v=WN1lLhHgJfA");
  }, []);

  return (
    <div className={Styles.root}>
      <div className={Styles.GLSlogoCont}>
        <div>
          <IconButton>
            <KeyboardBackspaceIcon className={Styles.GLSlogoContIcon} />
          </IconButton>
        </div>
        <div className={Styles.GLSlogoContBox}>
          <img className={Styles.GLSlogo} alt="glsLogo" src="/gls.svg" />
        </div>
      </div>

      <div className={Styles.GLSVideoDiv}>
        <ReactPlayer
          className={Styles.GLSVideo}
          controls
          url={url}
          height="100%"
          width="100%"
        />
      </div>
      <div className={Styles.GLSfeatureDiv}>
        <img
          className={Styles.GLSfeature}
          alt="feature"
          src="/Quarantine_edition.svg"
        />
      </div>
      <Container maxWidth="lg">
        <Grid
          justify="flex-start"
          alignItems="center"
          className={Styles.rootGLSCardGrid}
          spacing={2}
          container
        >
          <PreviousGLSCard />
          <PreviousGLSCard />
          <PreviousGLSCard />
          <PreviousGLSCard />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default PreviousGLS;
