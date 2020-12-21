import React from "react";
import Styles from "../styles/Organisers.module.css";
import { Grid, Avatar } from "@material-ui/core";

function OrganisersCard() {
  return (
    <div className={Styles.previewCard}>
      <Grid
        className={Styles.cardContain}
        justify="flex-start"
        alignItems="center"
        container
      >
        <Grid className={Styles.cardContainLeft} lg={3} sm md xs xl item>
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src="/Neeraj.jpg"
            className={Styles.large}
          />
        </Grid>
        <Grid className={Styles.cardContainRight} lg={9} sm md xs xl item>
          <h3 className={Styles.cardContainName}>Neeraj</h3>
          <span className={Styles.cardContainBio}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's.
          </span>
          <p className={Styles.cardContainContact}>
            <b>Phone: </b>+919090909009
          </p>
          <p className={Styles.cardContainContact}>
            <b>Email: </b>dummy@email.com
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrganisersCard;
