import Head from "next/head";
import { useRouter } from "next/router";

import Styles from "../styles/Home.module.css";
import { Grid, Container, AppBar, Toolbar } from "@material-ui/core";
import Particles from "react-particles-js";

import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import EmojiPeopleTwoToneIcon from "@material-ui/icons/EmojiPeopleTwoTone";

import Footer from "../components/footer";
import SideMenu from "../components/sideMenu";

export default function Home() {
  const router = useRouter();
  const particlesColors = ["#ff7445", "#2effcc", "#ffffff", "#fcee0a"];

  // function sendMail() {
  //   const mail = "mailto:sujitkumarsingh29@gmail.com";
  //   window.open(mail, "_blank");
  // }
  // var item = items[Math.floor(Math.random() * items.length)];

  return (
    <div className={Styles.root}>
      <Head>
        <title>Technovanza</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"
          defer
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Technovanza VJTI Matunga Mumbai college"
        />
        <meta property="og:title" content="Technovanza" />
        <meta
          property="og:description"
          content="Technovanza 2020 is arriving on 27th, 28th and 29th of january."
        />
        <meta property="og:image" content="/favicon.ico" />
      </Head>

      <main className={Styles.main}>
        <nav className={Styles.rootNav}>
          <AppBar className={Styles.navAppBar} position="static" elevation={0}>
            <Toolbar className={Styles.navToolBar}>
              <img
                style={{ marginRight: "auto" }}
                alt="LOGO"
                src="/TechnovanzaWhite.svg"
                className={Styles.logo}
              />
              <SideMenu />
            </Toolbar>
          </AppBar>
        </nav>
        <header className={Styles.headerParticles}>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
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
                <h2 className={Styles.previewCardTitle}>Events</h2>
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
