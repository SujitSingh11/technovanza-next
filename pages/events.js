import React from "react";
import Head from "next/head";

import { Grid } from "@material-ui/core";
import Style from "../styles/Events.module.css";

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
      <section>
        <Grid className={Style.eventGridRoot} container>
          <Grid className={Style.eventGridItem} lg={6} xs={12} item></Grid>
          <Grid className={Style.eventGridItemOdd} lg={6} xs={12} item></Grid>
          <Grid className={Style.eventGridItemOdd} lg={6} xs={12} item></Grid>
          <Grid className={Style.eventGridItem} lg={6} xs={12} item></Grid>
        </Grid>
      </section>
      <Footer />
    </div>
  );
}

export default Events;
