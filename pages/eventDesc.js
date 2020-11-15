import React from "react";
import Head from "next/head";
import Styles from "../styles/EventDesc.module.css";
import { Grid, Container, Button } from "@material-ui/core";

import Header from "../components/header";
import Footer from "../components/footer";

function EventDesc() {
  return (
    <>
      <Head>
        <title>Technovanza | Ultimate Coder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container maxWidth="md" className={Styles.headerRoot}>
          <Grid container>
            <Grid item lg={6} className={Styles.headerImgRoot}>
              <img
                alt="event"
                src="/assets/UltimateCoder19.png"
                className={Styles.headerImg}
              />
            </Grid>
            <Grid item lg={6}>
              <Container maxWidth="xs" className={Styles.headerMetaRoot}>
                <div>
                  <h1 className={Styles.headerTitle}>Ultimate Coder</h1>
                </div>
                <div className={Styles.headerMeta}>
                  <img
                    src="https://img.icons8.com/ultraviolet/80/000000/trophy.png"
                    width="60"
                  />
                  <span className={Styles.headerMetaDesc}>&#x20B9; 5,000</span>
                </div>
                <div className={Styles.headerMeta}>
                  <img
                    src="https://img.icons8.com/fluent/96/000000/planner.png"
                    width="60"
                  />
                  <span className={Styles.headerMetaDesc}>2020-12-29</span>
                </div>
                <div className={Styles.headerMeta}>
                  <img
                    src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png"
                    width="60"
                  />
                  <span className={Styles.headerMetaDesc}>Online</span>
                </div>
              </Container>
            </Grid>
          </Grid>
        </Container>
        <section className={Styles.eventIntroRoot}>
          <Container maxWidth="lg">
            <div className={Styles.eventIntroHeaderRoot}>
              <h1 className={Styles.eventIntroHeader}>Ultimate Coder</h1>
              <Button className={Styles.registerButton}>Register</Button>
            </div>
            <div>
              <p className={Styles.eventIntro}>
                Ultimate Coder is the biggest and grandest I-Code event that is
                help by Technovanza. It's not tough to become a coder, being an
                ultimate coder, on the other hand, is a different story. You
                will have the option of using languages like C, C++, Java and
                Python, but will you know how? We test not only your coding
                skills, but how you cope with the pressure of the challenges and
                tasks.
              </p>
            </div>
          </Container>
        </section>
        <section>
          <Container maxWidth="md">
            <Grid
              justify="space-between"
              container
              className={Styles.problemRoot}
            >
              <Grid lg={6} xs={12} className={Styles.problem} item>
                <div className={Styles.marginBottom}>
                  <h1 className={Styles.headerTitle}>Problem Statement</h1>
                </div>
                <div>
                  <Button className={Styles.registerButton}>Download</Button>
                </div>
              </Grid>
              <Grid lg={6} xs={12} className={Styles.contact} item>
                <div className={Styles.marginBottom}>
                  <h1 className={Styles.headerTitle}>Contact</h1>
                </div>
                <div>
                  <p className={Styles.contactText}>
                    Event Manager : +919999999999
                  </p>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EventDesc;
