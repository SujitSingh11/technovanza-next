import Head from "next/head";

import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

import Styles from "../styles/Home.module.css";
import { Grid, Container, AppBar, Toolbar } from "@material-ui/core";
import Particles from "react-particles-js";
import ScrollUp from "../components/scrollUp";

import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";

import Footer from "../components/footer";
import SideMenu from "../components/sideMenu";

export default function Home() {
  const router = useRouter();
  const particlesColors = ["#ff7445", "#2effcc", "#ffffff", "#fcee0a"];

  return (
    <div className={Styles.root}>
      <ScrollUp />
      <Head>
        <title>Technovanza</title>
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
          content="Technovanza VJTI Matunga Mumbai college"
        />

        <meta
          name="description"
          content="Technovanza 2020 is arriving on 27th, 28th and 29th of january"
        />

        <meta property="og:url" content="https://technovanza.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Technovanza" />
        <meta
          property="og:description"
          content="Technovanza 2020 is arriving on 27th, 28th and 29th of january"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/n0QMWDW/Meta-img.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="technovanza.org" />
        <meta property="twitter:url" content="https://technovanza.org/" />
        <meta name="twitter:title" content="Technovanza" />
        <meta
          name="twitter:description"
          content="Technovanza 2020 is arriving on 27th, 28th and 29th of january"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/n0QMWDW/Meta-img.png"
        />
      </Head>
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
        <header className={Styles.headerParticles}>
          {isMobile ? (
            <img alt="hero" src="/mobile.png" className={Styles.hero} />
          ) : (
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
          )}
        </header>
        <section className={Styles.aboutRootSection}>
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
                <h2 className={Styles.infoTitle}>TECHNOVANZA 2020</h2>
                <p className={Styles.infoDesc}>
                  Technovanza is the annual technical fest of Veermata Jijabai
                  Technological Institute, where students strive for excellence
                  while giving back to the community. Over the last 18 years,
                  Technovanza has grown to become of the most popular
                  Techno-managerial events in the country and continues to awe
                  its audience with the quality of events it hosts. From
                  conducting competitive events, where people all over India can
                  showcase their talents to hosting exhibitions with ISRO, BARC
                  and LIGO along with a glorious lineup of dignitaries from
                  various fields like Dr. A.P.J Abdul Kalam, Mr. Ratan Tata, Dr.
                  A.S. Kiran Kumar, Mr. Harsha Bhogle, Sophia: the humanoid
                  robot and many more, Technovanza keeps getting better each
                  year. Keeping up with our motto of “Taking Technology to the
                  society”, we continue to deliver an exuberant event, virtually
                  this year! So, join us from the comfort of your homes, while
                  we bring to you opportunities and exposure from the world
                  over.
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
        <section className={Styles.rootPreview}>
          <div className={Styles.previewTitleRoot}>
            <h1 className={Styles.previewTitle}>What's In Store</h1>
          </div>
          <Container maxWidth="lg">
            <div className={Styles.previewCardRoot}>
              <div
                className={Styles.previewCard}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                  router.push({ pathname: "/events" });
                }}
              >
                <div className={Styles.previewCardLogoDiv}>
                  <EmojiEventsTwoToneIcon
                    style={{ height: "8rem", width: "150px" }}
                  />
                </div>
                <h2 className={Styles.previewCardTitle}>Technovanza Events</h2>
              </div>
              <div
                className={Styles.previewCard}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                  router.push({ pathname: "/gls" });
                }}
              >
                <div className={Styles.previewCardLogoDiv}>
                  <img className={Styles.previewCardLogo} src="/gls.svg" />
                </div>
                <h2 className={Styles.previewCardTitle}>
                  Guest Lecture Series
                </h2>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
