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
            <Grid
              className={Styles.footerGridCont}
              justify="space-between"
              container
            >
              <Grid
                className={Styles.footerLogoGrid}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                item
              >
                <img
                  alt="technoLogoText"
                  src="/Technovanza.svg"
                  className={Styles.logoText}
                />
              </Grid>
              <Grid
                className={Styles.footerSocialGrid}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                item
              >
                <div>
                  <h4 className={Styles.footerSocialText}>Follow Us At</h4>
                </div>
                <div>
                  <IconButton className={Styles.iconButton}>
                    <InstagramIcon className={Styles.iconInsta} />
                  </IconButton>
                  <IconButton className={Styles.iconButton}>
                    <FacebookIcon className={Styles.iconFacebook} />
                  </IconButton>
                  <IconButton className={Styles.iconButton}>
                    <YouTubeIcon className={Styles.iconYoutube} />
                  </IconButton>
                  <IconButton className={Styles.iconButton}>
                    <TwitterIcon className={Styles.iconTwitter} />
                  </IconButton>
                  <IconButton className={Styles.iconButton}>
                    <LinkedInIcon className={Styles.iconLinkedIn} />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </footer>
    // <Grid alignItems="center" className={Styles.rootFooterGrid} container>
    //   <Grid
    //     className={Styles.footerLogoGrid}
    //     lg={4}
    //     md={4}
    //     sm={12}
    //     xs={12}
    //     item
    //   >
    //     <img
    //       alt="technoLogoText"
    //       src="/Technovanza.svg"
    //       className={Styles.logoText}
    //     />
    //   </Grid>
    //   <Grid
    //     lg={4}
    //     md={4}
    //     sm={12}
    //     xs={12}
    //     className={Styles.footerSocialGrid}
    //     item
    //   >
    //     <IconButton className={Styles.iconButton}>
    //       <InstagramIcon className={Styles.iconInsta} />
    //     </IconButton>
    //     <IconButton className={Styles.iconButton}>
    //       <FacebookIcon className={Styles.iconFacebook} />
    //     </IconButton>
    //     <IconButton className={Styles.iconButton}>
    //       <YouTubeIcon className={Styles.iconYoutube} />
    //     </IconButton>
    //     <IconButton className={Styles.iconButton}>
    //       <TwitterIcon className={Styles.iconTwitter} />
    //     </IconButton>
    //     <IconButton className={Styles.iconButton}>
    //       <LinkedInIcon className={Styles.iconLinkedIn} />
    //     </IconButton>
    //   </Grid>
    //   <Grid
    //     className={Styles.footerCreatorGrid}
    //     lg={4}
    //     md={4}
    //     sm={12}
    //     xs={12}
    //     item
    //   ></Grid>
    // </Grid>
  );
}

export default Footer;
