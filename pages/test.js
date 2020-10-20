import React from "react";
import Head from "next/head";
import { Container, Grid } from "@material-ui/core";

import Style from "../styles/Test.module.css";
import Particles from "react-particles-js";

const Test = () => {
  return (
    <div className={Style.root}>
      <Grid className={Style.headerRoot} container>
        <Grid className={Style.headerDiv} lg={12} md sm xs item>
          <Particles
            params={{
              fps_limit: 28,
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
        </Grid>
      </Grid>
      <Grid className={Style.sliderRoot} container>
        <Grid className={Style.sliderDiv} lg={12} md sm xs item>
          <Container className={Style.sliderCont}></Container>
        </Grid>
      </Grid>
      <Grid className={Style.footerRoot} container>
        <Grid className={Style.footerDiv} lg={12} md sm xs item>
          <Container className={Style.footerCont}></Container>
        </Grid>
      </Grid>
      <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
    </div>
  );
};

export default Test;
