import Head from "next/head";
import Link from "next/link";
import Styles from "../styles/Home.module.css";
import {
  Grid,
  Container,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";
import Particles from "react-particles-js";

import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MenuIcon from "@material-ui/icons/Menu";

import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={Styles.root}>
      <Head>
        <title>Technovanza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={Styles.main}>
        <nav className={Styles.rootNav}>
          <AppBar className={Styles.navAppBar} position="static">
            <Toolbar>
              <img
                style={{ marginRight: "auto" }}
                alt="LOGO"
                src="/Technovanza.svg"
              />
              <div className={Styles.menuDesktop}>
                <Link href="/">
                  <a className={Styles.menuDesktopItem}>Events</a>
                </Link>
                <Link href="/gls">
                  <a className={Styles.menuDesktopItem}>Speakers</a>
                </Link>
                <Link href="/">
                  <Button className={Styles.cardButtons}>Login</Button>
                </Link>
              </div>
              <IconButton
                edge="end"
                className={Styles.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon className={Styles.menuButtonIcon} />
              </IconButton>
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
                  value: 350,
                  density: {
                    enable: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 32,
                  opacity: 0.5,
                  color: "#02d7f2",
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
        <section className={Styles.rootPreview}>
          <div className={Styles.previewTitleRoot}>
            <h1 className={Styles.previewTitle}>What's In Store</h1>
          </div>
          <Container maxWidth="lg">
            <div className={Styles.previewCardRoot}>
              <div
                className={Styles.previewCard}
                style={{
                  background:
                    "url('/assets/events-back.jpg') center center / cover",
                }}
              >
                <h2 className={Styles.previewCardTitle}>Events</h2>
              </div>
              <div
                className={Styles.previewCard}
                style={{
                  background:
                    "url('/assets/events-back.jpg') center center / cover",
                }}
              >
                <h2 className={Styles.previewCardTitle}>Workshops</h2>
              </div>
              <div
                className={Styles.previewCard}
                style={{
                  background:
                    "url('/assets/events-back.jpg') center center / cover",
                }}
              >
                <h2 className={Styles.previewCardTitle}>
                  Guest Lecture Series
                </h2>
              </div>
            </div>
          </Container>
        </section>
        <section></section>
      </main>

      <footer className={Styles.footer}>
        <Footer />
      </footer>
      <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
    </div>
  );
}
