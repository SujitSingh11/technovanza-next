import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/GLS.module.css";

import Header from "../components/header";
import Upcoming from "../components/upcoming";
import Footer from "../components/footer";

import UpcomingData from "../data/upcomingGlsData.json";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Technovanza | GLS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Styles.root}>
        <Header />
        <Container maxWidth="md">
          <Grid
            justify="center"
            className={Styles.featureUpcomingCont}
            container
          >
            <Grid className={Styles.featureUpcomingDiv} item>
              <i className={Styles.featureUpcomingDivTop}></i>
              <h1 className={Styles.featureUpcoming}>Guest Lectures 2020</h1>
              <i className={Styles.featureUpcomingDivBottom}></i>
            </Grid>
          </Grid>
          <Grid className={Styles.rootGLSGrid} container>
            {UpcomingData.map((data, index) => {
              return <Upcoming data={data} key={index} />;
            })}
          </Grid>
        </Container>
        <div className={Styles.rootPreview}>
          <div className={Styles.previewCardCont}></div>
          <div className={Styles.previewCardCont}></div>
          <div className={Styles.previewCardCont}></div>
        </div>
        <Container maxWidth="lg" className={Styles.previousGLSGridRoot}>
          <div className={Styles.previousGLSGridDiv}>
            <div
              className={Styles.previousGLSGrid}
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                router.push({ pathname: "/previousgls/Quarantine%20Edition" });
              }}
            >
              <div className={Styles.cardIcon}>
                <img className={Styles.QEIcon} src="/glsQE.svg" />
              </div>
              <h2 className={Styles.previousCardTitle}>Quarantine Edition</h2>
            </div>
            <div
              className={Styles.previousGLSGrid}
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                router.push({ pathname: "/previousgls/Quarantine_Edition" });
              }}
            >
              <div className={Styles.cardIcon}>
                <img className={Styles.QEIcon} src="/glsQE.svg" />
              </div>
              <h2 className={Styles.previousCardTitle}>Hourglass Edition</h2>
            </div>
            <div
              className={Styles.previousGLSGrid}
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                router.push({ pathname: "/previousgls/Quarantine_Edition" });
              }}
            >
              <div className={Styles.cardIcon}>
                <img className={Styles.QEIcon} src="/gls.svg" />
              </div>
              <h2 className={Styles.previousCardTitle}>Previous GLS</h2>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Home;
