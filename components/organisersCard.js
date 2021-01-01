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
        <Grid
          className={Styles.cardContainLeft}
          lg={3}
          sm={3}
          md={3}
          xs={4}
          xl={3}
          item
        >
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src="/Neeraj.jpg"
            className={Styles.large}
          />
        </Grid>
        <Grid className={Styles.cardContainRight} lg={9} sm md xs xl item>
          <h3 className={Styles.cardContainName}>Neeraj</h3>

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
