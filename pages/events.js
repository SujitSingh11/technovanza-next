import React from "react";
import Head from "next/head";

import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/Events.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

function Events() {
  return (
    <div>
      <Head>
        <title>Technovanza | Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={Styles.mainContent}>
        <Container maxWidth="lg">
          <Grid
            justify="center"
            className={Styles.featureUpcomingCont}
            container
          >
            <Grid className={Styles.featureUpcomingDiv} item>
              <i className={Styles.featureUpcomingDivTop}></i>
              <h1 className={Styles.featureUpcoming}>I-CODE</h1>
              <i className={Styles.featureUpcomingDivBottom}></i>
            </Grid>
          </Grid>

          <div className={Styles.previewCardRoot}>
            <div
              className={Styles.previewCard}
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                router.push({ pathname: "/gls" });
              }}
            >
              <div className={Styles.previewCardLogoDiv}>
                <img className={Styles.previewCardLogo} src="/gls.svg" />
              </div>
              <h2 className={Styles.previewCardTitle}>Guest Lecture Series</h2>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Events;
