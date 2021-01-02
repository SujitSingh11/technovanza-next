import React from "react";
import Image from "next/image";
import Styles from "../styles/Organisers.module.css";
import { Grid } from "@material-ui/core";

function OrganisersCard({ info }) {
  console.log(info);
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
          <Image
            alt="Remy Sharp"
            src={`/organisers/${info.IMG}`}
            height="110"
            width="110"
            className={Styles.large}
          />
        </Grid>
        <Grid className={Styles.cardContainRight} lg={9} sm md xs xl item>
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
