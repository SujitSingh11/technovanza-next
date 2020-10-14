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

function PreviousGLSCard() {
  const [onHover, setOnHover] = useState(false);

  return (
    <Grid className={Styles.GLSCardGrid} lg={3} md={4} sm={6} xs={12} items>
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
            image="/speakers/V_K_SARASWAT_9_Oct_2020.jpeg"
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
              Speaker Name
            </Typography>
            {onHover ? (
              <Fade in={onHover}>
                <Scrollbars style={{ height: 315 }}>
                  <p>
                    Apr 04, 2023, 7:00 PM – 11:00 PM <br />
                    The Launch, 500 Terry A Francois Blvd, San Francisco, CA
                    94158, USA
                  </p>
                  <p>
                    I’m an event description. To edit the event description go
                    to My Events. Simply click Manage Events and start editing
                    your event details. I’m a great place to get your guests
                    excited by telling them a little more about your upcoming
                    events.
                  </p>
                  <p>
                    I’m an event description. To edit the event description go
                    to My Events. Simply click Manage Events and start editing
                    your event details. I’m a great place to get your guests
                    excited by telling them a little more about your upcoming
                    events.
                  </p>
                </Scrollbars>
              </Fade>
            ) : (
              <div>
                <p className={Styles.cardDec}>Thu, Apr 04</p>
              </div>
            )}
          </CardContent>
        </div>
        <CardActions className={Styles.cardButtonsArea}>
          <Button
            className={Styles.cardButtons}
            variant="outlined"
            size="medium"
          >
            Watch
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PreviousGLSCard;
