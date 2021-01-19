import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Grid, Container } from "@material-ui/core";
import Styles from "../../styles/PreviousGSL.module.css";
import ReactPlayer from "react-player/youtube";

import GLSCard from "../../components/glsCard";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ScrollUp from "../../components/scrollUp";
import PreviousGLSPhotos from "../../components/previousGLSPhotos";

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
      {router.query.slug === "Previous_GLS" ? <PreviousGLSPhotos /> : <></>}
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
      <div className={Styles.previewTitleRoot}>
        <h1 className={Styles.previewTitle}>Playlist</h1>
      </div>
      <Container maxWidth="lg">
        <Grid
          justify="flex-start"
          alignItems="center"
          className={Styles.rootGLSCardGrid}
          spacing={2}
          container
        >
          {data.map((speaker, index) => {
            return (
              <GLSCard
                data={speaker}
                changeURL={(link) => {
                  setUrl(link);
                  setAutoPlay(true);
                  window.scroll({
                    top: router.query.slug === "Previous_GLS" ? 650 : 200,
                    behavior: "smooth",
                  });
                }}
                key={index}
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
