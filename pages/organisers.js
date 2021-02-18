import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

import { Grid, Container } from "@material-ui/core";
import Styles from "../styles/Organisers.module.css";

import Header from "../components/header";
import Footer from "../components/footer";
import ScrollUp from "../components/scrollUp";

import OrganisersCard from "../components/organisersCard";

function Organisers({ res }) {
  return (
    <>
      <ScrollUp />
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
          content="Technovanza VJTI Matunga Mumbai college Conveners Events workshops hackaton"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="technovanza.org" />
        <meta property="twitter:url" content="https://technovanza.org/" />
        <meta name="twitter:title" content="Technovanza 2020-21 | Conveners" />
        <meta
          name="twitter:description"
          content="Technovanza is the annual technical fest of VJTI, where students strive for excellence while giving back to the community."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/n0QMWDW/Meta-img.png"
        />
        <meta
          name="google-site-verification"
          content="Aw-FexouK2hhzklty49vnnpgW6rCKdMUru0l64W2Boo"
        />
      </Head>
      <NextSeo
        title="Technovanza | Conveners"
        description="Technovanza is the annual technical fest of VJTI, where students strive for excellence while giving back to the community."
        canonical="https://www.technovanza.org"
        openGraph={{
          url: "https://www.technovanza.org",
          title: "Technovanza 2020-21 | Conveners",
          description:
            "Technovanza is the annual technical fest of VJTI, where students strive for excellence while giving back to the community.",
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
      <Header />
      <Container maxWidth="lg">
        <Grid justify="center" className={Styles.featureUpcomingCont} container>
          <Grid className={Styles.featureUpcomingDiv} item>
            <i className={Styles.featureUpcomingDivTop}></i>
            <h1 className={Styles.featureUpcoming}>Conveners</h1>
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
