import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Grid, Container } from "@material-ui/core";
import Styles from "../../styles/PreviousGSL.module.css";
import ReactPlayer from "react-player/youtube";

import PreviousGLSCard from "../../components/previousGLSCard";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ScrollUp from "../../components/scrollUp";

import PreviousData from "../../data/previousGlsData.json";

const PreviousGLS = () => {
  const router = useRouter();

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    selectData(router.query.slug);
  }, [router.query.slug]);

  const selectData = (query) => {
    console.log(query);
    switch (query) {
      case "Quarantine_Edition":
        setData(PreviousData.Quarantine_Edition);
        setTitle("Quarantine Edition");
        setUrl(PreviousData.Quarantine_Edition[0].YouTube_Link);
        break;
      case "Hourglass_Edition":
        setData(PreviousData.Hourglass_Edition);
        setTitle("Hourglass Edition");
        setUrl(PreviousData.Hourglass_Edition[0].YouTube_Link);
        break;
      case "Previous_GLS":
        setData(PreviousData.Previous_GLS);
        setTitle("Previous GLS");
        setUrl(PreviousData.Previous_GLS[0].YouTube_Link);
        break;
      default:
        setData(PreviousData.Quarantine_Edition);
        setTitle("Quarantine Edition");
        setUrl(PreviousData.Quarantine_Edition[0].YouTube_Link);
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
      <ScrollUp />
      <Grid justify="center" className={Styles.featureUpcomingCont} container>
        <Grid className={Styles.featureUpcomingDiv} item>
          <i className={Styles.featureUpcomingDivTop}></i>
          <h1 className={Styles.featureUpcoming}>{title}</h1>
          <i className={Styles.featureUpcomingDivBottom}></i>
        </Grid>
      </Grid>

      <Container className={Styles.GLSVideoDiv}>
        <ReactPlayer
          className={Styles.GLSVideo}
          controls
          url={url}
          height="100%"
          width="100%"
          playing={autoPlay}
        />
      </Container>

      <Container maxWidth="lg">
        <Grid
          justify="flex-start"
          alignItems="center"
          className={Styles.rootGLSCardGrid}
          spacing={2}
          container
        >
          {data.map((speaker) => {
            return (
              <PreviousGLSCard
                info={speaker}
                changeURL={(link) => {
                  setUrl(link);
                  setAutoPlay(true);
                  window.scroll({
                    top: 200,
                    behavior: "smooth",
                  });
                }}
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
