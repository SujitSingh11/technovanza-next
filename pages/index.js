import Head from "next/head";
import { useRouter } from "next/router";

import Styles from "../styles/Home.module.css";
import { Grid, Container, AppBar, Toolbar } from "@material-ui/core";
import Particles from "react-particles-js";

import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";

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
              fps_limit: 100,
              particles: {
                collisions: {
                  enable: true,
                },
                number: {
                  value: 450,
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
                  speed: 1.0,
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
                scale: 1.3,
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
                    color: "rgba(255, 255, 255, .2)",
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
        <section className={Styles.infoRoot}>
          <Container className={Styles.infoRootCont} maxWidth="lg">
            <div>
              <div>
                <div className={Styles.infoCollegeRoot}>
                  <h1 className={Styles.infoTitle}>VJTI</h1>
                  <h2 className={Styles.infoDesc}>
                    Veermata Jijabai Technological Institute, Matunga
                  </h2>
                </div>
                <Grid justify="space-between" container>
                  <Grid className={Styles.infoGridItem} lg={5} xs={12} item>
                    <h2 className={Styles.infoDesc}>
                      Participate in the festival from the comforts of your home
                    </h2>
                    <p>
                      With all the safety concerns raising from CHINA VIRUS, we
                      have shifted the event to an online platform. Experience a
                      new form of Technovanza from the safe space of your home!
                    </p>
                  </Grid>
                  <Grid className={Styles.infoGridItem} lg={5} xs={12} item>
                    <h2 className={Styles.infoDesc}>Dates</h2>
                    <p>27th, 28th, 29th December, 2020</p>
                  </Grid>
                </Grid>
              </div>
              {/* <div className={Styles.infoFeature}>
                <Grid justify="space-around" container>
                  <Grid item>
                    <AccountBalanceTwoToneIcon
                      className={Styles.infoFeatureIcon}
                    />
                    <p className={Styles.infoFeatureDetail}>150 colleges</p>
                  </Grid>
                  <Grid item>
                    <GroupAddTwoToneIcon className={Styles.infoFeatureIcon} />
                    <p className={Styles.infoFeatureDetail}>80,000 Footfall</p>
                  </Grid>
                  <Grid item>
                    <EmojiPeopleTwoToneIcon
                      className={Styles.infoFeatureIcon}
                    />
                    <p className={Styles.infoFeatureDetail}>
                      4,000 Participants
                    </p>
                  </Grid>
                </Grid>
              </div> */}
            </div>
          </Container>
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
