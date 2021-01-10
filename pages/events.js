import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/Events.module.css";

import Header from "../components/header";
import Footer from "../components/footer";
import ScrollUp from "../components/scrollUp";

import eventData from "../data/eventData.json";

const Events = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Technovanza | Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={Styles.mainContent}>
        <ScrollUp />
        {eventData.map((department, index) => {
          return (
            <Container maxWidth="lg" key={index}>
              <Grid
                justify="center"
                className={Styles.featureUpcomingCont}
                container
              >
                <Grid className={Styles.featureUpcomingDiv} item>
                  <i className={Styles.featureUpcomingDivTop}></i>
                  <h1 className={Styles.featureUpcoming}>
                    {department.Department}
                  </h1>
                  <i className={Styles.featureUpcomingDivBottom}></i>
                </Grid>
              </Grid>

              <div
                className={
                  department.Department === "I-CODE"
                    ? Styles.previewCardRootICode
                    : department.Department === "Knowland" ||
                      department.Department === "E-build"
                    ? Styles.previewCardRootSingle
                    : Styles.previewCardRoot
                }
              >
                {department.Events.map((event, index) => {
                  return (
                    <div
                      key={index}
                      className={Styles.previewCard}
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          behavior: "smooth",
                        });
                        router.push({
                          pathname: `/event/${department.Department}/${event.Event}`,
                        });
                      }}
                    >
                      <div className={Styles.previewCardLogoDiv}>
                        <img
                          className={Styles.previewCardLogo}
                          src={event.Logo}
                          alt={event.Event}
                        />
                      </div>
                      <h2 className={Styles.previewCardTitle}>{event.Event}</h2>
                    </div>
                  );
                })}
              </div>
            </Container>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Events;
