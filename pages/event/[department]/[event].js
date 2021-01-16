import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Styles from "../../../styles/EventDesc.module.css";
import { Grid, Container, Button } from "@material-ui/core";

import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ScrollUp from "../../../components/scrollUp";

import { useAuthState } from "react-firebase-hooks/auth";
import firebaseClient from "../../../firebaseClient";

const auth = firebaseClient.auth();

const EventDesc = ({ res }) => {
  const [user] = useAuthState(auth);
  const [event, setEvent] = useState({});

  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    res.map((data) => {
      if (data.Department !== router.query.department) {
        return;
      }
      data.Events.map((e) => {
        if (e.Event !== router.query.event) {
          return;
        }
        setEvent(e);
        setLoading(false);
      });
    });
  }, [res]);

  // console.log(user ? true : false);

  return (
    <>
      <Head>
        <title>Technovanza | {router.query.event}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ScrollUp />
      <main>
        <Container maxWidth="md" className={Styles.headerRoot}>
          <Grid container>
            <Grid item lg={6} className={Styles.headerImgRoot}>
              <img alt="event" src={event.LogoI} className={Styles.headerImg} />
            </Grid>
            <Grid item lg={6}>
              <Container maxWidth="xs" className={Styles.headerMetaRoot}>
                <div>
                  <h1 className={Styles.headerTitle}>{event.Event}</h1>
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
                <Button className={Styles.registerButton}>Register</Button>
              </Container>
            </Grid>
          </Grid>
        </Container>
        <section className={Styles.eventIntroRoot}>
          <Container maxWidth="lg">
            <div className={Styles.eventIntroHeaderRoot}>
              <h1 className={Styles.eventIntroHeader}>{event.Event}</h1>
            </div>
            <div>
              <p className={Styles.eventIntro}>{event.Description}</p>
            </div>
          </Container>
        </section>
        <section>
          <div className={Styles.problemCont}>
            <Grid
              justify="space-between"
              container
              className={Styles.problemRoot}
            >
              <Grid lg={6} xs={12} className={Styles.problem} item>
                <Container maxWidth="xs">
                  <div className={Styles.marginBottom}>
                    <h1 className={Styles.headerTitleProblem}>
                      Event Proposal
                    </h1>
                  </div>
                  <div>
                    <Button
                      href="/events/problem/E-Portfolio2020.pdf"
                      className={Styles.problemButton}
                      download
                    >
                      Download
                    </Button>
                  </div>
                </Container>
              </Grid>
              <Grid lg={6} xs={12} className={Styles.contact} item>
                <Container maxWidth="xs">
                  <div className={Styles.marginBottom}>
                    <h1 className={Styles.headerTitleProblem}>Contact</h1>
                  </div>
                  <div>
                    {loading ? (
                      <></>
                    ) : (
                      event.Contact.map((contact, index) => {
                        return (
                          <p key={index} className={Styles.contactText}>
                            {contact.Name} : +91-{contact.Number}
                          </p>
                        );
                      })
                    )}
                  </div>
                </Container>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className={Styles.regSection}>
          <Container className={Styles.regCont} maxWidth="md">
            <form className={Styles.regRoot}>
              <div className={Styles.regHead}>
                <div className={Styles.regHeadItems}>
                  <div className={Styles.regCircle} />
                  <div className={Styles.regCircle} />
                  <div className={Styles.regCircle} />
                </div>
              </div>
              <div className={Styles.regBody}>
                <h1 className={Styles.regTitle}>ROADMAP</h1>
              </div>
            </form>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EventDesc;

EventDesc.getInitialProps = async (ctx) => {
  const eventData = fetch(`${process.env.domain}/data/eventData.json`);
  const res = await (await eventData).json();
  return {
    res,
  };
};
