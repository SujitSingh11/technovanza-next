import React from "react";
import Image from "next/image";

import { Grid } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Styles from "../styles/GLSCardSmall.module.css";

function GlsCard({ data }) {
  return (
    <Grid lg={2} md={3} sm={4} xs={6} item>
      <div className={Styles.GLSplaylist}>
        <div className={Styles.GLSplaylistCover}>
          <a target="_blank" href={data.YouTube_Link}>
            <Image
              className={Styles.GLSplaylistImg}
              alt={data.SpeakerName}
              src={"/speakers/" + data.IMG}
              height={320}
              width={300}
            />
          </a>
          <a target="_blank" href={data.YouTube_Link}>
            <YouTubeIcon className={Styles.GLSplaylistPlayIcon} />
          </a>
        </div>
        <p className={Styles.GLSplaylistName}>{data.SpeakerName}</p>
      </div>
    </Grid>
  );
}

export default GlsCard;
