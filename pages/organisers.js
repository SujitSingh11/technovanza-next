import React from "react";

import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/Organisers.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

import OrganisersCard from "../components/organisersCard";

import OrganisersData from "../data/organisers.json";

function Organisers() {
  return (
    <>
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
          {OrganisersData.map((data, index) => {
            return <OrganisersCard key={index} info={data} />;
          })}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Organisers;
