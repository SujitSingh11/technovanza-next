import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/PreviousGSL.module.css";
import ReactPlayer from "react-player/youtube";

import PreviousGLSCard from "../components/previousGLSCard";
import Footer from "../components/footer";
import Header from "../components/header";

const PreviousGLS = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl("https://www.youtube.com/watch?v=WN1lLhHgJfA");
  }, []);

  return (
    <div className={Styles.root}>
      <Header />
      <div className={Styles.GLSVideoDiv}>
        <ReactPlayer
          className={Styles.GLSVideo}
          controls
          url={url}
          height="100%"
          width="100%"
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
