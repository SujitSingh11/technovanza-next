import React from "react";
import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/GLS.module.css";
import Upcoming from "../components/upcoming";
import Footer from "../components/footer";

import UpcomingData from "../data/upcomingGlsData.json";

const Home = () => {
  return (
    <div className={Styles.root}>
      <div className={Styles.GLSDiv}>
        <div className={Styles.GLSLogoDiv}>
          <img className={Styles.GLSLogo} alt="gls logo" src="/gls.svg" />
        </div>
      </div>
      <div className={Styles.GLSLogoFeatureDiv}>
        <img
          alt="gls logo"
          src="/Upcoming_Lectures.svg"
          className={Styles.GLSLogoFeature}
        />
      </div>
      <Container maxWidth="md">
        <Grid className={Styles.rootGLSGrid} container>
          {UpcomingData.map((data, index) => {
            return <Upcoming data={data} key={index} />;
          })}
        </Grid>
        <Grid alignItems="center" container>
          <Grid
            className={Styles.previousGLSGrid}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            item
          >
            <div className={Styles.GLSLogoFeatureDiv}></div>
          </Grid>
          <Grid
            className={Styles.previousGLSGrid}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            item
          >
            <div className={Styles.GLSLogoFeatureDiv}></div>
          </Grid>
          <Grid
            className={Styles.previousGLSGrid}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            item
          >
            <div className={Styles.GLSLogoFeatureDiv}></div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
