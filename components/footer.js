import React from "react";
import { Grid, IconButton, Container } from "@material-ui/core";
import Styles from "../styles/Footer.module.css";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <footer>
      <Grid className={Styles.footerRoot} container>
        <Grid className={Styles.footerDiv} lg={12} md sm xs item>
          <Container className={Styles.footerCont}>
            <Grid alignItems="center" justify="space-between" container>
              <Grid className={Styles.footerSocial} item>
                <p className={Styles.footerCopy}>
                  Technovanza 2020 © All Rights Reserved
                </p>
              </Grid>
              <Grid className={Styles.footerSocial} item>
                <div className={Styles.footerSocialDiv}>
                  <IconButton
                    onClick={() => {
                      window.open("https://instagram.com/technovanza");
                    }}
                    className={Styles.iconButton}
                  >
                    <InstagramIcon className={Styles.iconInsta} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      window.open("https://www.facebook.com/technovanza");
                    }}
                    className={Styles.iconButton}
                  >
                    <FacebookIcon className={Styles.iconFacebook} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      window.open("https://youtube.com/c/TechnovanzaVJTI");
                    }}
                    className={Styles.iconButton}
                  >
                    <YouTubeIcon className={Styles.iconYoutube} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      window.open("https://twitter.com/Technovanza");
                    }}
                    className={Styles.iconButton}
                  >
                    <TwitterIcon className={Styles.iconTwitter} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/company/technovanza-vjti"
                      );
                    }}
                    className={Styles.iconButton}
                  >
                    <LinkedInIcon className={Styles.iconLinkedIn} />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
