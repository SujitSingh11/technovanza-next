import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Grid, Container } from "@material-ui/core";
import Styles from "../../styles/PreviousGSL.module.css";
import ReactPlayer from "react-player/youtube";

import PreviousGLSCard from "../../components/previousGLSCard";
import Footer from "../../components/footer";
import Header from "../../components/header";

import PreviousData from "../../data/previousGlsData.json";

const PreviousGLS = () => {
  const router = useRouter();

  const [url, setUrl] = useState("https://www.youtube.com/watch?v=ugCkL-R4QW8");
  const [data, setData] = useState([]);

  useEffect(() => {
    selectData(router.query);
  }, [router.query.slug]);

  const selectData = (query) => {
    switch (query) {
      case "Quarantine_Edition":
        setData(PreviousGLSCard.Quarantine_Edition);
        break;
      case "Hourglass_Edition":
        setData(PreviousGLSCard.Hourglass_Edition);
        break;
      case "Previous_GLS":
        setData(PreviousGLSCard.Previous_GLS);
        break;
      default:
        setData(PreviousGLSCard.Quarantine_Edition);
        break;
    }
  };

  return (
    <div className={Styles.root}>
      <Head>
        <title>Technovanza | {router.query.slug}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          {PreviousData.Quarantine_Edition.map((speaker) => {
            return <PreviousGLSCard info={speaker} />;
          })}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default PreviousGLS;
