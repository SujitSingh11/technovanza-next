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
          <div>
            <h1>I-Code</h1>
          </div>
          <div></div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Events;
