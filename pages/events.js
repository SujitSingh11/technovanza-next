import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/Events.module.css";

import Header from "../components/header";
import Footer from "../components/footer";
import ScrollUp from "../components/scrollUp";

const Events = ({ res }) => {
  return (
    <div>
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
          content="Technovanza VJTI Matunga Mumbai college GLS Events workshops hackaton"
        />
        <meta name="robots" content="noindex" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="technovanza.org" />
        <meta property="twitter:url" content="https://technovanza.org/events" />
        <meta name="twitter:title" content="Technovanza | Events" />
        <meta
          name="twitter:description"
          content="Technovanza is the annual technical fest of VJTI, where students strive for excellence while giving back to the community. Over the last 18 years, it has grown to become of the most popular Techno-managerial events in the country and continues to awe its audience with the quality of events it hosts : From conducting competitive events, where people all over India can showcase their talents to hosting exhibitions and dignitaries from various fields, Technovanza keeps getting better each year. Keeping up with our motto of “Taking Technology to the society”, we continue to deliver an exuberant event, virtually this year!"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/n0QMWDW/Meta-img.png"
        />
      </Head>
      <NextSeo
        title="Technovanza | Events"
        description="Technovanza is the annual technical fest of VJTI, where students strive for excellence while giving back to the community. Over the last 18 years, it has grown to become of the most popular Techno-managerial events in the country and continues to awe its audience with the quality of events it hosts : From conducting competitive events, where people all over India can showcase their talents to hosting exhibitions and dignitaries from various fields, Technovanza keeps getting better each year. Keeping up with our motto of “Taking Technology to the society”, we continue to deliver an exuberant event, virtually this year!"
        canonical="https://www.technovanza.org/events"
        openGraph={{
          url: "https://www.technovanza.org/events",
          title: "Technovanza | Events",
          description:
            "Technovanza is the annual technical fest of VJTI, where students strive for excellence while giving back to the community. Over the last 18 years, it has grown to become of the most popular Techno-managerial events in the country and continues to awe its audience with the quality of events it hosts : From conducting competitive events, where people all over India can showcase their talents to hosting exhibitions and dignitaries from various fields, Technovanza keeps getting better each year. Keeping up with our motto of “Taking Technology to the society”, we continue to deliver an exuberant event, virtually this year!",
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
          site: "https://www.technovanza.org/events",
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <section className={Styles.mainContent}>
        <ScrollUp />
        {res.map((department, index) => {
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
                      department.Department === "E-build" ||
                      department.Department === "Escapar"
                    ? Styles.previewCardRootSingle
                    : Styles.previewCardRoot
                }
              >
                {department.Events.map((event, index) => {
                  return (
                    <a
                      key={index}
                      className={
                        event.Event === "Ultimate Coder"
                          ? Styles.previewCardUC
                          : Styles.previewCard
                      }
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          behavior: "smooth",
                        });
                        // router.push({
                        //   pathname: `/event/${department.Department}/${event.Event}`,
                        // });
                      }}
                      href={`/event/${department.Department}/${event.Event}`}
                    >
                      <div className={Styles.previewCardLogoDiv}>
                        <img
                          className={Styles.previewCardLogo}
                          src={event.Logo}
                          alt={event.Event}
                        />
                      </div>
                      <h2 className={Styles.previewCardTitle}>{event.Event}</h2>
                    </a>
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

Events.getInitialProps = async (ctx) => {
  const eventData = fetch(`${process.env.domain}/data/eventData.json`);
  const res = await (await eventData).json();
  return {
    res,
  };
};
