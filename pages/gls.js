import React from "react";
import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/GLS.module.css";

import Header from "../components/header";
import Upcoming from "../components/upcoming";
import Footer from "../components/footer";

import UpcomingData from "../data/upcomingGlsData.json";

const Home = () => {
  return (
    <div className={Styles.root}>
      <Header />
      <Container maxWidth="md">
        <Grid justify="center" className={Styles.featureUpcomingCont} container>
          <Grid className={Styles.featureUpcomingDiv} item>
            <i className={Styles.featureUpcomingDivTop}></i>
            <h1 className={Styles.featureUpcoming}>Upcoming Lectures</h1>
            <i className={Styles.featureUpcomingDivBottom}></i>
          </Grid>
        </Grid>
        <Grid className={Styles.rootGLSGrid} container>
          {UpcomingData.map((data, index) => {
            return <Upcoming data={data} key={index} />;
          })}
        </Grid>
      </Container>
      <Container maxWidth="lg" className={Styles.previousGLSGridRoot}>
        <div className={Styles.previousGLSGridDiv}>
          <div className={Styles.previousGLSGrid}>
            <div className={Styles.cardContent}></div>
            <div className={Styles.cardContent}></div>
          </div>
          <div className={Styles.previousGLSGrid}></div>
          <div className={Styles.previousGLSGrid}></div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
