import Head from "next/head";
import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import ReactPlayer from "react-player";

import Styles from "../styles/Home.module.css";
import { Grid, Container, AppBar, Toolbar } from "@material-ui/core";
import Particles from "react-particles-js";
import ScrollUp from "../components/scrollUp";

import Footer from "../components/footer";
import SideMenu from "../components/sideMenu";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  const prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
  function mq(query) {
    return typeof window !== "undefined" && window.matchMedia(query).matches;
  }
  if (
    "ontouchstart" in window ||
    (window?.DocumentTouch && document instanceof DocumentTouch)
  )
    return true;
  const query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join(
    ""
  );
  return mq(query);
}

export default function Home() {
  const [isTouch, setIsTouch] = useState(false);
  const [isMobileSafari, setIsMobileSafari] = useState(false);
  useEffect(() => {
    const {
      isAndroid,
      isIPad13,
      isIPhone13,
      isWinPhone,
      isMobileSafari,
      isTablet,
    } = require("react-device-detect");
    setIsTouch(
      isTouch ||
        isAndroid ||
        isIPad13 ||
        isIPhone13 ||
        isWinPhone ||
        isMobileSafari ||
        isTablet ||
        isTouchDevice(isMobileSafari)
    );
    setIsMobileSafari();
  }, []);

  const particlesColors = ["#ff7445", "#2effcc", "#ffffff", "#fcee0a"];

  return (
    <div className={Styles.root}>
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
          content="Technovanza VJTI Matunga Mumbai college GLS Events workshops hackaton"
        />
        <meta name="robots" content="noindex" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="technovanza.org" />
        <meta property="twitter:url" content="https://technovanza.org/" />
        <meta name="twitter:title" content="Technovanza" />
        <meta
          name="twitter:description"
          content="Technovanza is the annual technical fest of VJTI, where students strive for excellence while giving back to the community. Over the last 18 years, it has grown to become of the most popular Techno-managerial events in the country and continues to awe its audience with the quality of events it hosts : From conducting competitive events, where people all over India can showcase their talents to hosting exhibitions and dignitaries from various fields, Technovanza keeps getting better each year. Keeping up with our motto of “Taking Technology to the society”, we continue to deliver an exuberant event, virtually this year!"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/n0QMWDW/Meta-img.png"
        />
        <meta
          name="google-site-verification"
          content="uGO9l44wXKFaNzJi3TjxNn3usbdk5SiR60suDKdwumY"
        />
      </Head>
      <NextSeo
        title="Technovanza | VJTI"
        description="Technovanza is the annual technical fest of VJTI, where students strive for excellence while giving back to the community. Over the last 18 years, it has grown to become of the most popular Techno-managerial events in the country and continues to awe its audience with the quality of events it hosts : From conducting competitive events, where people all over India can showcase their talents to hosting exhibitions and dignitaries from various fields, Technovanza keeps getting better each year. Keeping up with our motto of “Taking Technology to the society”, we continue to deliver an exuberant event, virtually this year!"
        canonical="https://www.technovanza.org"
        openGraph={{
          url: "https://www.technovanza.org",
          title: "Technovanza | VJTI",
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
          site: "https://www.technovanza.org/",
          cardType: "summary_large_image",
        }}
      />

      <main className={Styles.main}>
        <nav className={Styles.rootNav}>
          <AppBar className={Styles.navAppBar} position="static" elevation={0}>
            <Toolbar className={Styles.navToolBar}>
              <img
                alt="LOGO"
                src="/TechnovanzaWhite.svg"
                className={Styles.logo}
              />
              <SideMenu />
            </Toolbar>
          </AppBar>
        </nav>
        <header>
          {isTouch ? (
            <div className={Styles.player}>
              <ReactPlayer
                url="/target.webm"
                width="100%"
                height="100%"
                playing={true}
                loop={true}
                muted={true}
                playsinline={true}
              />
            </div>
          ) : (
            <div className={Styles.headerParticles}>
              <Particles
                params={{
                  fps_limit: 165,
                  particles: {
                    collisions: {
                      enable: true,
                    },
                    number: {
                      value: 400,
                      density: {
                        enable: false,
                      },
                    },
                    line_linked: {
                      enable: true,
                      distance: 32,
                      opacity: 0.7,
                      color:
                        particlesColors[
                          Math.floor(Math.random() * particlesColors.length)
                        ],
                    },
                    move: {
                      speed: 1.5,
                    },
                    opacity: {
                      anim: {
                        enable: true,
                        opacity_min: 0.05,
                        speed: 1,
                        sync: true,
                      },
                      value: 0.4,
                    },
                  },
                  polygon: {
                    enable: true,
                    scale: 1.2,
                    type: "inline",
                    move: {
                      radius: 1000,
                    },
                    url: "/assets/mask.svg",
                    inline: {
                      arrangement: "equidistant",
                    },
                    draw: {
                      enable: true,
                      stroke: {
                        color: "rgba(255, 255, 255, .3)",
                      },
                    },
                  },
                  retina_detect: false,
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "bubble",
                      },
                    },
                    modes: {
                      bubble: {
                        size: 10,
                        distance: 50,
                      },
                    },
                  },
                }}
              />
            </div>
          )}
        </header>
        <section>
          <Grid className={Styles.aboutRootGrid} container>
            <Grid
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={Styles.aboutTechno}
              item
            >
              <div className={Styles.infoCollegeRoot}>
                <h2 className={Styles.infoTitle}>
                  Veermata Jijabai Technological Institute Presents
                </h2>
                <img
                  alt="LOGO"
                  src="/TechnovanzaWhite.svg"
                  className={Styles.logoInfo}
                />
                <p className={Styles.infoDesc}>
                  Technovanza is the annual technical fest of VJTI, where
                  students strive for excellence while giving back to the
                  community. Over the last 18 years, it has grown to become of
                  the most popular Techno-managerial events in the country and
                  continues to awe its audience with the quality of events it
                  hosts : From conducting competitive events, where people all
                  over India can showcase their talents to hosting exhibitions
                  and dignitaries from various fields, Technovanza keeps getting
                  better each year. Keeping up with our motto of “Taking
                  Technology to the society”, we continue to deliver an
                  exuberant event, virtually this year!
                </p>
              </div>
            </Grid>
            <Grid
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={Styles.aboutLeft}
              item
            >
              <div className={Styles.infoCollegeRoot}>
                <h2 className={Styles.infoSubTitle}>
                  Participate in the festival from the comforts of your home
                </h2>
                <p className={Styles.infoDesc}>
                  With all the safety concerns raising from COVID-19, we have
                  shifted the event to an online platform. Experience a new form
                  of Technovanza from the safe space of your home!
                </p>
              </div>
            </Grid>
            <Grid
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={Styles.aboutRight}
              item
            >
              <div className={Styles.infoCollegeRoot}>
                <h2 className={Styles.infoSubTitle}>Important Dates</h2>
                <p className={Styles.infoDesc}>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </Grid>
          </Grid>
        </section>
        <section>
          <div className={Styles.previewTitleRoot}>
            <h1 className={Styles.previewTitle}>Events Schedule</h1>
          </div>
          <Container maxWidth="md">
            <div className={Styles.scheduleRoot}>
              <div className={Styles.schedule}>
                <div className={Styles.scheduleDate}>
                  <span>30 Jan 2021</span>
                </div>
                <div className={Styles.scheduleEvent}>
                  <span>Javaguru, Technohunt</span>
                </div>
                <div className={Styles.scheduleTime}>
                  <span>10AM - 2PM</span>
                </div>
              </div>
              <div className={Styles.schedule}>
                <div className={Styles.scheduleDate}>
                  <span>30 Jan 2021</span>
                </div>
                <div className={Styles.scheduleEvent}>
                  <span>CodeStorm</span>
                </div>
                <div className={Styles.scheduleTime}>
                  <span>10AM Onwards</span>
                </div>
              </div>
              <div className={Styles.schedule}>
                <div className={Styles.scheduleDate}>
                  <span>30 Jan 2021</span>
                </div>
                <div className={Styles.scheduleEvent}>
                  <span>Project on problem statement</span>
                </div>
                <div className={Styles.scheduleTime}>
                  <span>3PM Onwards</span>
                </div>
              </div>
              <div className={Styles.schedule}>
                <div className={Styles.scheduleDate}>
                  <span>30 Jan 2021</span>
                </div>
                <div className={Styles.scheduleEvent}>
                  <span>Eportfolio</span>
                </div>
                <div className={Styles.scheduleTime}>
                  <span>3PM - 6PM</span>
                </div>
              </div>
              <div className={Styles.schedule}>
                <div className={Styles.scheduleDate}>
                  <span>31 Jan 2021</span>
                </div>
                <div className={Styles.scheduleEvent}>
                  <span>C-Way, Sherlocked</span>
                </div>
                <div className={Styles.scheduleTime}>
                  <span>10AM - 2PM</span>
                </div>
              </div>
              <div className={Styles.schedule}>
                <div className={Styles.scheduleDate}>
                  <span>31 Jan 2021</span>
                </div>
                <div className={Styles.scheduleEvent}>
                  <span>Ultimate Coder</span>
                </div>
                <div className={Styles.scheduleTime}>
                  <span>3PM - 7PM</span>
                </div>
              </div>
              <div className={Styles.schedule}>
                <div className={Styles.scheduleDate}>
                  <span>31 Jan 2021</span>
                </div>
                <div className={Styles.scheduleEvent}>
                  <span>Smartcity (School Cup)</span>
                </div>
                <div className={Styles.scheduleTime}>
                  <span>10AM - 1PM</span>
                </div>
              </div>
              <div className={Styles.schedule}>
                <div className={Styles.scheduleDate}>
                  <span>31 Jan 2021</span>
                </div>
                <div className={Styles.scheduleEvent}>
                  <span>Smartcity (College Cup)</span>
                </div>
                <div className={Styles.scheduleTime}>
                  <span>2PM - 5PM</span>
                </div>
              </div>
              <div className={Styles.schedule}>
                <div className={Styles.scheduleDate}>
                  <span>06 Feb 2021</span>
                </div>
                <div className={Styles.scheduleEvent}>
                  <span>VRC</span>
                </div>
                <div className={Styles.scheduleTime}>
                  <span>10AM Onwards</span>
                </div>
              </div>
              <div className={Styles.schedule}>
                <div className={Styles.scheduleDate}>
                  <span>06 Feb 2021</span>
                </div>
                <div className={Styles.scheduleEvent}>
                  <span>Robomaze</span>
                </div>
                <div className={Styles.scheduleTime}>
                  <span>10AM Onwards</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className={Styles.rootPreview}>
          <div className={Styles.previewTitleRoot}>
            <h1 className={Styles.previewTitle}>What's In Store</h1>
          </div>
          <Container maxWidth="lg">
            <div className={Styles.previewCardRoot}>
              <a
                className={Styles.previewCard}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                  //router.push({ pathname: "/events" });
                }}
                href="/events"
              >
                <div className={Styles.previewCardLogoDiv}>
                  <img
                    alt="eventLogo"
                    className={Styles.previewCardLogoEvent}
                    src="/event logo.svg"
                  />
                </div>
                <h2 className={Styles.previewCardTitle}>Technovanza Events</h2>
              </a>
              <a
                className={Styles.previewCard}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                  //router.push({ pathname: "/gls" });
                }}
                href="/gls"
              >
                <div className={Styles.previewCardLogoDiv}>
                  <img
                    alt="gls"
                    className={Styles.previewCardLogo}
                    src="/gls.svg"
                  />
                </div>
                <h2 className={Styles.previewCardTitle}>
                  Guest Lecture Series
                </h2>
              </a>
            </div>
          </Container>
        </section>
        <section>
          <div>
            <h1 className={Styles.previousTechTitle}>Technovanza '19</h1>
            <div className={Styles.previousTechRoot}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=1ar1i4r9DOU"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
        </section>
        <section>
          <div className={Styles.aboutUsRoot}>
            <Container className={Styles.aboutUsCont} maxWidth="lg">
              <h1 className={Styles.aboutUsLabel}>About Us</h1>
              <Grid
                alignItems="center"
                className={Styles.aboutUsGridRoot}
                container
              >
                <Grid
                  className={Styles.aboutUsGrid}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  item
                >
                  <ul className={Styles.aboutUsUL}>
                    <li className={Styles.aboutUsLI}>
                      Due to inundating creativity and thirst for innovation of
                      our students and with the constant guidance of our
                      unparalleled faculty, Technovanza was born in 2000.
                    </li>
                    <li className={Styles.aboutUsLI}>
                      Keeping in mind our core values of working as a team with
                      integrity and professionalism and the ultimate aim of
                      “Taking Technology to the Society”, Technovanza has grown
                      over the last 19 years to become one of the most popular
                      and awaited techno-management events in the country.
                    </li>
                    <li className={Styles.aboutUsLI}>
                      Reaching out to students, industry and the society in
                      general, Technovanza 2020 promises to be bigger than ever!
                    </li>
                  </ul>
                </Grid>
                {!isTouch ? (
                  <Grid
                    className={Styles.aboutUsGrid}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    item
                  >
                    <ReactPlayer
                      url="/target.webm"
                      width="100%"
                      height="100%"
                      playing={true}
                      loop={true}
                      muted={true}
                      playsinline={true}
                    />
                  </Grid>
                ) : (
                  <></>
                )}
              </Grid>
              <Container>
                <h1 className="glitch" data-text="See you in January">
                  See you in January
                </h1>
              </Container>
            </Container>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
