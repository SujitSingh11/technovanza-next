import React, { useState } from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Fade,
  Grid,
} from "@material-ui/core";
import Styles from "../styles/GLSCard.module.css";
import { Scrollbars } from "react-custom-scrollbars";

function PreviousGLSCard({ info, changeURL }) {
  const [onHover, setOnHover] = useState(false);

  return (
    <Grid className={Styles.GLSCardGrid} lg={3} md={4} sm={6} xs={12} item>
      <Card className={Styles.cardroot}>
        <div
          id="card-hover"
          onMouseEnter={() => {
            setOnHover(true);
          }}
          onMouseLeave={() => {
            setOnHover(false);
          }}
        >
          <CardMedia
            id="card-img"
            component="img"
            alt="GLS Speaker"
            height="140"
            image={"/speakers/" + info.IMG}
            title="GLS Speaker"
            className={Styles.cardIMG}
          />
          <CardContent className={Styles.cardInfo}>
            <Typography
              className={Styles.speakerName}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {info.SpeakerName}
            </Typography>
            {onHover ? (
              <Fade in={onHover}>
                <Scrollbars style={{ height: 315 }}>
                  <p className={Styles.glsStatus}>
                    <i>{info.TalkOn}</i>
                  </p>
                  <div
                    className={Styles.glsDesc}
                    dangerouslySetInnerHTML={{ __html: info.Description }}
                  />
                </Scrollbars>
              </Fade>
            ) : (
              <div>
                <p className={Styles.cardDec}>
                  {info.Month + " " + info.DayNumber + ", " + info.Year}
                </p>
              </div>
            )}
          </CardContent>
        </div>
        <CardActions className={Styles.cardButtonsArea}>
          <Button
            className={Styles.cardButtons}
            variant="outlined"
            size="medium"
            onClick={() => {
              changeURL(info.YouTube_Link);
            }}
          >
            Watch
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PreviousGLSCard;
