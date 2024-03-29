import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import Styles from "../../../styles/EventDesc.module.css";
import { Grid, Container, Button } from "@material-ui/core";

import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ScrollUp from "../../../components/scrollUp";

import { useAuthState } from "react-firebase-hooks/auth";
import firebaseClient from "../../../firebaseClient";

const auth = firebaseClient.auth();

const EventDesc = ({ props }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      const provider = new firebaseClient.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"
          defer
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content={`Technovanza VJTI Matunga Mumbai college GLS Events workshops hackaton ${router.query.event}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="technovanza.org" />
        <meta
          property="twitter:url"
          content={`https://www.technovanza.org/event/${router.query.event}`}
        />
        <meta
          name="twitter:title"
          content={`Technovanza 2020-21 | ${router.query.event}`}
        />
        <meta name="twitter:description" content={props.Description} />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/n0QMWDW/Meta-img.png"
        />
      </Head>
      <NextSeo
        title={`Technovanza | ${router.query.event}`}
        description={props.Description}
        canonical={`https://www.technovanza.org/event/${router.query.event}`}
        openGraph={{
          url: `https://www.technovanza.org/event/${router.query.event}`,
          title: `Technovanza 2020-21 | ${router.query.event}`,
          description: props.Description,
          images: [
            {
              url: "https://i.ibb.co/n0QMWDW/Meta-img.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://i.ibb.co/n0QMWDW/Meta-img.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://i.ibb.co/n0QMWDW/Meta-img.png" },
            { url: "https://i.ibb.co/n0QMWDW/Meta-img.png" },
          ],
          site_name: "SiteName",
          type: "website",
        }}
        twitter={{
          handle: "@handle",
          site: `https://www.technovanza.org/event/${router.query.event}`,
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <ScrollUp />
      <main>
        <Container maxWidth="md" className={Styles.headerRoot}>
          <Grid container>
            <Grid item lg={6} className={Styles.headerImgRoot}>
              <img alt="event" src={props.LogoI} className={Styles.headerImg} />
            </Grid>
            <Grid item lg={6}>
              <Container maxWidth="xs" className={Styles.headerMetaRoot}>
                <div>
                  <h1 className={Styles.headerTitle}>{props.Event}</h1>
                </div>
                {props.Prize === "" ? (
                  <></>
                ) : (
                  <div className={Styles.headerMeta}>
                    <img
                      src="https://img.icons8.com/ultraviolet/80/000000/trophy.png"
                      width="60"
                    />
                    <span className={Styles.headerMetaDesc}>
                      &#x20B9; {props.Prize}
                    </span>
                  </div>
                )}
                <div className={Styles.headerMeta}>
                  <img
                    src="https://img.icons8.com/fluent/96/000000/planner.png"
                    width="60"
                  />
                  <span className={Styles.headerMetaDesc}>{props.date}</span>
                </div>
                <div className={Styles.headerMeta}>
                  <img
                    src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png"
                    width="60"
                  />
                  <span className={Styles.headerMetaDesc}>Online</span>
                </div>
                {props.EPLink != "" ? (
                  user ? (
                    <Button
                      onClick={() => {
                        window.open(props.regLink, "_blank");
                      }}
                      className={Styles.registerButton}
                    >
                      Register
                    </Button>
                  ) : (
                    <Button
                      onClick={signInWithGoogle}
                      className={Styles.registerButton}
                    >
                      Login
                    </Button>
                  )
                ) : (
                  <Button
                    onClick={signInWithGoogle}
                    className={Styles.registerButton}
                    disabled
                  >
                    Coming Soon
                  </Button>
                )}
              </Container>
            </Grid>
          </Grid>
        </Container>
        <section className={Styles.eventIntroRoot}>
          <Container maxWidth="lg">
            <div className={Styles.eventIntroHeaderRoot}>
              <h1 className={Styles.eventIntroHeader}>{props.Event}</h1>
            </div>
            <div>
              {Array.isArray(props.Description) ? (
                props.Description.map((desc) => (
                  <p className={Styles.eventIntro}>{desc}</p>
                ))
              ) : (
                <p className={Styles.eventIntro}>{props.Description}</p>
              )}
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
                    <h2 className={Styles.headerTitleProblem}>
                      Event Proposal
                    </h2>
                  </div>
                  <div>
                    {props.EPLink != "" ? (
                      <Button
                        href={`/events/problem/${props.EPLink}`}
                        className={Styles.problemButton}
                        target="_blank"
                      >
                        <a
                          target="_blank"
                          href={`/events/problem/${props.EPLink}`}
                          className={Styles.problemButtonA}
                        >
                          Download
                        </a>
                      </Button>
                    ) : (
                      <p className={Styles.contactText}>
                        No Proposal for this event, please register above
                        directly.
                      </p>
                    )}
                  </div>
                </Container>
              </Grid>
              <Grid lg={6} xs={12} className={Styles.contact} item>
                <Container maxWidth="xs">
                  <div className={Styles.marginBottom}>
                    <h2 className={Styles.headerTitleProblem}>Contact</h2>
                  </div>
                  <div>
                    {props.Contact.map((contact, index) => {
                      return (
                        <p key={index} className={Styles.contactText}>
                          {contact.Name} : +91-{contact.Number}
                        </p>
                      );
                    })}
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
                <h2 className={Styles.regTitle}>Registration Process</h2>
                <div className={Styles.regSteps}>
                  <div className={Styles.regStep}>
                    <h3 className={Styles.regSubTitle}>Step-I</h3>
                    <img
                      className={Styles.regfaqImg}
                      alt="FAQ step-1"
                      src="/faq/FAQ-1.jpg"
                    />
                    <p className={Styles.regpara}>
                      You can find the login button on the Sidebar or on the
                      event description page.
                    </p>
                  </div>
                  <div className={Styles.regStep}>
                    <h3 className={Styles.regSubTitle}>Step-II</h3>
                    <img
                      className={Styles.regfaqImg}
                      alt="FAQ step-2"
                      src="/faq/FAQ-2.jpg"
                    />
                    <p className={Styles.regpara}>
                      After login successful you will be redirected to the
                      registration form, It is important to fill it up before
                      registering for any event.
                    </p>
                  </div>
                  <div className={Styles.regStep}>
                    <h3 className={Styles.regSubTitle}>Step-III</h3>
                    <img
                      className={Styles.regfaqImg}
                      alt="FAQ step-3"
                      src="/faq/FAQ-3.jpg"
                    />
                    <p className={Styles.regpara}>
                      Finally, you can find your Techno ID on the Sidebar and it
                      will be always available to you for further registration
                      of any events. You will have to click on the "Click to
                      copy" Box to copy your Techno ID.
                    </p>
                    <img
                      className={Styles.regfaqImg}
                      alt="FAQ step-3.1"
                      src="/faq/FAQ-3.1.jpg"
                    />
                    <p className={Styles.regpara}>
                      Above is an example of what a Techno ID looks like, it's a
                      long chain of Alphanumeric text.
                    </p>
                  </div>
                </div>
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
  const eventData = await fetch(`${process.env.domain}/data/eventData.json`);
  const res = await eventData.json();
  let data = res.filter((d) => {
    if (d.Department === ctx.query.department) {
      return d;
    }
  });
  data = data[0].Events.filter((d) => {
    if (d.Event === ctx.query.event) {
      return d;
    }
  });
  return {
    props: data[0],
  };
};
