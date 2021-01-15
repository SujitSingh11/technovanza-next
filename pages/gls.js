import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { Grid, Container, Button } from "@material-ui/core";
import Styles from "../styles/GLS.module.css";

import Header from "../components/header";
import Upcoming from "../components/upcoming";
import Footer from "../components/footer";
import ScrollUp from "../components/scrollUp";

const GLS = ({ res }) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setData(res);
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Head>
        <title>Technovanza | GLS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Styles.root}>
        <ScrollUp />
        <Header />
        <Container maxWidth="md">
          <Grid
            justify="center"
            className={Styles.featureUpcomingCont}
            container
          >
            <Grid className={Styles.featureUpcomingDiv} item>
              <i className={Styles.featureUpcomingDivTop}></i>
              <h1 className={Styles.featureUpcoming}>Guest Lectures 2020</h1>
              <i className={Styles.featureUpcomingDivBottom}></i>
            </Grid>
          </Grid>
          <Grid className={Styles.rootGLSGrid} container>
            {data.map((data, index) => {
              if (index <= 5) {
                return <Upcoming data={data} key={index} />;
              } else {
                return;
              }
            })}
          </Grid>
          <div
            className={showMore ? Styles.viewMoreDivShow : Styles.viewMoreDiv}
          >
            <Grid className={Styles.rootGLSGrid} container>
              {data.map((data, index) => {
                if (index > 5) {
                  return <Upcoming data={data} key={index} />;
                } else {
                  return;
                }
              })}
            </Grid>
          </div>
          <div className={showMore ? Styles.viewMoreHide : Styles.viewMore}>
            <Button onClick={handleShowMore} className={Styles.viewMoreButton}>
              View More
            </Button>
          </div>
        </Container>
        <Container maxWidth="lg" className={Styles.previousGLSGridRoot}>
          <div className={Styles.previousGLSGridDiv}>
            <a
              className={Styles.previousGLSGrid}
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                //router.push({ pathname: "/previousgls/Quarantine_Edition" });
              }}
              href="/previousgls/Quarantine_Edition"
            >
              <div className={Styles.cardIcon}>
                <img className={Styles.QEIcon} src="/glsQE.svg" />
              </div>
              <h2 className={Styles.previousCardTitle}>Quarantine Edition</h2>
            </a>
            <a
              className={Styles.previousGLSGrid}
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                //router.push({ pathname: "/previousgls/Hourglass_Edition" });
              }}
              href="/previousgls/Hourglass_Edition"
            >
              <div className={Styles.cardIcon}>
                <img className={Styles.QEIcon} src="/hourglass.svg" />
              </div>
              <h2 className={Styles.previousCardTitle}>Hourglass Edition</h2>
            </a>
            <a
              className={Styles.previousGLSGrid}
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                //router.push({ pathname: "/previousgls/Previous_GLS" });
              }}
              href="/previousgls/Previous_GLS"
            >
              <div className={Styles.cardIcon}>
                <img className={Styles.QEIcon} src="/gls.svg" />
              </div>
              <h2 className={Styles.previousCardTitle}>Previous GLS</h2>
            </a>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default GLS;

GLS.getInitialProps = async (ctx) => {
  const upcomingGlsData = fetch(
    `${process.env.domain}/data/upcomingGlsData.json`
  );
  const res = await (await upcomingGlsData).json();
  return {
    res,
  };
};
