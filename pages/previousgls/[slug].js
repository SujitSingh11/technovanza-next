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

const PreviousGLS = ({ res }) => {
  const router = useRouter();

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    selectData(router.query.slug);
  }, [router.query.slug]);

  const selectData = (query) => {
    switch (query) {
      case "Quarantine_Edition":
        setData(res.Quarantine_Edition);
        setTitle("Quarantine Edition");
        setUrl(res.Quarantine_Edition[0].YouTube_Link);
        break;
      case "Hourglass_Edition":
        setData(res.Hourglass_Edition);
        setTitle("Hourglass Edition");
        setUrl(res.Hourglass_Edition[0].YouTube_Link);
        break;
      case "Previous_GLS":
        setData(res.Previous_GLS);
        setTitle("Previous GLS");
        setUrl(res.Previous_GLS[0].YouTube_Link);
        break;
      default:
        setData(res.Quarantine_Edition);
        setTitle("Quarantine Edition");
        setUrl(res.Quarantine_Edition[0].YouTube_Link);
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

PreviousGLS.getInitialProps = async (ctx) => {
  const PreviousData = fetch(`${process.env.domain}/data/previousGlsData.json`);
  const res = await (await PreviousData).json();
  return {
    res,
  };
};
