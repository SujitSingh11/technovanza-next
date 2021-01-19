import React from "react";
import Image from "next/image";

import { Grid } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Styles from "../styles/GLSCardSmall.module.css";

function GlsCard({ data, changeURL }) {
  console.log(changeURL);
  return (
    <Grid lg={2} md={3} sm={4} xs={6} item>
      <div className={Styles.GLSplaylist}>
        <div className={Styles.GLSplaylistCover}>
          {typeof changeURL === "undefined" ? (
            <>
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
            </>
          ) : (
            <>
              <Image
                className={Styles.GLSplaylistImg}
                alt={data.SpeakerName}
                src={"/speakers/" + data.IMG}
                height={320}
                width={300}
                onClick={() => changeURL(data.YouTube_Link)}
              />
              <YouTubeIcon
                onClick={() => changeURL(data.YouTube_Link)}
                className={Styles.GLSplaylistPlayIcon}
              />
            </>
          )}
        </div>
        <p className={Styles.GLSplaylistName}>{data.SpeakerName}</p>
      </div>
    </Grid>
  );
}

export default GlsCard;
