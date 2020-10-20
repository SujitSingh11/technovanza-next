import Head from "next/head";
import Styles from "../styles/Home.module.css";
import { Grid, Container, Typography } from "@material-ui/core";
import Particles from "react-particles-js";

import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={Styles.root}>
      <Head>
        <title>Technovanza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={Styles.main}>
        <header className={Styles.headerParticles}>
          <Particles
            params={{
              fps_limit: 60,
              particles: {
                collisions: {
                  enable: false,
                },
                number: {
                  value: 300,
                  density: {
                    enable: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 30,
                  opacity: 0.5,
                  color: "#fc043c",
                },
                move: {
                  speed: 1,
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
                scale: 0.6,
                type: "inline",
                move: {
                  radius: 10,
                },
                url: "/assets/small-deer.2a0425af.svg",
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
                    size: 6,
                    distance: 40,
                  },
                },
              },
            }}
          />
        </header>
        <section></section>
      </main>

      <footer className={Styles.footer}>
        <Footer />
      </footer>
      <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
    </div>
  );
}
