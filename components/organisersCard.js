import React from "react";
import Image from "next/image";
import Styles from "../styles/Organisers.module.css";
import { Grid } from "@material-ui/core";

function OrganisersCard({ info }) {
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
          xs={12}
          xl={3}
          item
        >
          <Image
            alt="Remy Sharp"
            src={`/organisers/${info.IMG}`}
            className={Styles.large}
            height="150"
            width="150"
          />
        </Grid>
        <Grid className={Styles.cardContainRight} lg={9} sm md xs={12} xl item>
          <h3 className={Styles.cardContainName}>{info.Name}</h3>
          {!info.Phone ? (
            <></>
          ) : (
            <p className={Styles.cardContainContact}>
              <b>Phone: </b>+91-{info.Phone}
            </p>
          )}
          <p className={Styles.cardContainContact}>
            <b>Email: </b>
            {info.Email}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrganisersCard;
