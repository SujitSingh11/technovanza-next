import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

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
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import EmojiPeopleTwoToneIcon from "@material-ui/icons/EmojiPeopleTwoTone";
import WarningTwoToneIcon from "@material-ui/icons/WarningTwoTone";

import Footer from "../components/footer";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIFlrAHUb_xrR4SadMIXkC2oTJ4gLi23I",
  authDomain: "technovanza-3e853.firebaseapp.com",
  databaseURL: "https://technovanza-3e853.firebaseio.com",
  projectId: "technovanza-3e853",
  storageBucket: "technovanza-3e853.appspot.com",
  messagingSenderId: "163729170268",
  appId: "1:163729170268:web:e60535731c1c2aebebeb99",
  measurementId: "G-6T8LTS2VJT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  function sendMail() {
    const mail = "mailto:sujitkumarsingh29@gmail.com";
    window.open(mail, "_blank");
  }

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  console.log(auth.currentUser);
  return (
    <div className={Styles.root}>
      <Head>
        <title>Technovanza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={Styles.main}>
        <nav className={Styles.rootNav}>
          <AppBar className={Styles.navAppBar} position="static" elevation={0}>
            <Toolbar>
              <img
                style={{ marginRight: "auto" }}
                alt="LOGO"
                src="/Technovanza.svg"
              />
              <div className={Styles.menuDesktop}>
                <Link href="/events">
                  <a className={Styles.menuDesktopItem}>Events</a>
                </Link>
                <Link href="/gls">
                  <a className={Styles.menuDesktopItem}>Speakers</a>
                </Link>
                <Link href="/">
                  {user ? (
                    <Button
                      onClick={() => auth.signOut()}
                      className={Styles.cardButtons}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button
                      onClick={signInWithGoogle}
                      className={Styles.cardButtons}
                    >
                      Login
                    </Button>
                  )}
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
                  value: 450,
                  density: {
                    enable: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 32,
                  opacity: 0.7,
                  color: "#34d2de",
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
                      With all the safety concerns raising from COVID, we have
                      shifted the event to an online platform. Experience a new
                      form of Technovanza from the safe space of your home!
                    </p>
                  </Grid>
                  <Grid className={Styles.infoGridItem} lg={5} xs={12} item>
                    <h2 className={Styles.infoDesc}>Dates</h2>
                    <p>27th, 28th, 29th December, 2020</p>
                  </Grid>
                </Grid>
              </div>
              <div className={Styles.infoFeature}>
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
              <div
                className={Styles.previewCard}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                  router.push({ pathname: "/events", query: "/gls.svg" });
                }}
              >
                <h2 className={Styles.previewCardTitle}>Events</h2>
              </div>
              <div
                className={Styles.previewCard}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                  router.push({ pathname: "/gls", query: "/gls.svg" });
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
        <section></section>
      </main>

      <Footer />

      <script
        src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"
        defer
      />
    </div>
  );
}
