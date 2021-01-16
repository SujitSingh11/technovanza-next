import React from "react";
import Head from "next/head";

import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/Organisers.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

import OrganisersCard from "../components/organisersCard";

function Organisers({ res }) {
  return (
    <>
      <Head>
        <title>Technovanza | Organisers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container maxWidth="lg">
        <Grid justify="center" className={Styles.featureUpcomingCont} container>
          <Grid className={Styles.featureUpcomingDiv} item>
            <i className={Styles.featureUpcomingDivTop}></i>
            <h1 className={Styles.featureUpcoming}>Secretaries</h1>
            <i className={Styles.featureUpcomingDivBottom}></i>
          </Grid>
        </Grid>
      </Container>
      <Container className={Styles.rootContainer} maxWidth="sm">
        <div className={Styles.previewCardRoot}>
          {res.map((data, index) => {
            return <OrganisersCard key={index} info={data} />;
          })}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Organisers;

Organisers.getInitialProps = async (ctx) => {
  const organisers = fetch(`${process.env.domain}/data/organisers.json`);
  const res = await (await organisers).json();
  return {
    res,
  };
};
