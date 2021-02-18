import React, { useState, useEffect } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/GLS.module.css";

import Header from "../components/header";
import GlsCard from "../components/glsCard";
import Footer from "../components/footer";
import ScrollUp from "../components/scrollUp";

const GLS = ({ res }) => {
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
          content="Technovanza VJTI Matunga Mumbai college GLS Guest Leacture Series"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="technovanza.org" />
        <meta property="twitter:url" content="https://technovanza.org/gls" />
        <meta name="twitter:title" content="Technovanza | GLS" />
        <meta
          name="twitter:description"
          content="The motto of GLS is to steer the all around development of students so that they can unlock their potential and become individuals of the highest caliber, who not only go on to have valuable contributions in their field of expertise, but also establish themselves as concerned citizens of the society. With a renowned lineup of Guest Lectures over the years, Technovanza has always been a prime platform, where the flame of expertise is effectively transferred to many torches. The pioneers of diverse fields have graced Technovanza with their presence, illuminating more and more minds to new areas of interest."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/n0QMWDW/Meta-img.png"
        />
      </Head>
      <NextSeo
        title="Technovanza | GLS"
        description="The motto of GLS is to steer the all around development of students so that they can unlock their potential and become individuals of the highest caliber, who not only go on to have valuable contributions in their field of expertise, but also establish themselves as concerned citizens of the society. With a renowned lineup of Guest Lectures over the years, Technovanza has always been a prime platform, where the flame of expertise is effectively transferred to many torches. The pioneers of diverse fields have graced Technovanza with their presence, illuminating more and more minds to new areas of interest."
        canonical="https://www.technovanza.org/gls"
        openGraph={{
          url: "https://www.technovanza.org/gls",
          title: "Technovanza 2020-21 | GLS",
          description:
            "The motto of GLS is to steer the all around development of students so that they can unlock their potential and become individuals of the highest caliber, who not only go on to have valuable contributions in their field of expertise, but also establish themselves as concerned citizens of the society. With a renowned lineup of Guest Lectures over the years, Technovanza has always been a prime platform, where the flame of expertise is effectively transferred to many torches. The pioneers of diverse fields have graced Technovanza with their presence, illuminating more and more minds to new areas of interest.",
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
          site: "https://www.technovanza.org/",
          cardType: "summary_large_image",
        }}
      />
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
        </Container>
        {/* <Grid className={Styles.rootGLSGrid} container>
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
          </div> */}
        <Container maxWidth="lg">
          <Grid className={Styles.rootGLS} container>
            {data.map((data, index) => (
              <GlsCard data={data} key={index} />
            ))}
          </Grid>
        </Container>
        <Container maxWidth="md">
          <Grid
            justify="center"
            className={Styles.featureUpcomingCont}
            container
          >
            <Grid className={Styles.featureUpcomingDiv} item>
              <i className={Styles.featureUpcomingDivTop}></i>
              <h1 className={Styles.featureUpcoming}>GLS so far...</h1>
              <i className={Styles.featureUpcomingDivBottom}></i>
            </Grid>
          </Grid>
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
                <img alt="glsQE" className={Styles.QEIcon} src="/glsQE.svg" />
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
                <img
                  alt="glsHE"
                  className={Styles.QEIcon}
                  src="/hourglass.svg"
                />
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
                <img alt="glsPE" className={Styles.QEIcon} src="/gls.svg" />
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
