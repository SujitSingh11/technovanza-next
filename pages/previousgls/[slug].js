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
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    selectData(router.query.slug);
  }, [router.query.slug]);

  const selectData = (query) => {
    console.log(query);
    switch (query) {
      case "Quarantine Edition":
        setData(PreviousGLSCard.Quarantine_Edition);
        setTitle("Quarantine Edition");
        break;
      case "Hourglass Edition":
        setData(PreviousGLSCard.Hourglass_Edition);
        setTitle("Hourglass Edition");
        break;
      case "Previous GLS":
        setData(PreviousGLSCard.Previous_GLS);
        setTitle("Previous GLS");
        break;
      default:
        setData(PreviousGLSCard.Quarantine_Edition);
        setTitle("Previous GLS");
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
      <Grid justify="center" className={Styles.featureUpcomingCont} container>
        <Grid className={Styles.featureUpcomingDiv} item>
          <i className={Styles.featureUpcomingDivTop}></i>
          <h1 className={Styles.featureUpcoming}>{title}</h1>
          <i className={Styles.featureUpcomingDivBottom}></i>
        </Grid>
      </Grid>

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
            return (
              <PreviousGLSCard
                info={speaker}
                changeURL={(link) => setUrl(link)}
                key={speaker.SpeakerName}
              />
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default PreviousGLS;
