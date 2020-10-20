import React, { useState } from "react";
import { Grid, Button, Collapse, CardActionArea } from "@material-ui/core";
import Styles from "../styles/UpcomingGLS.module.css";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Upcoming = ({ data }) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <Grid lg={12} md={12} sm={12} xs={12} className={Styles.GLSGrid} item>
      <div className={Styles.glsEventAcc}>
        <div className={Styles.gslEvent}>
          <div className={Styles.dateBox}>
            <div className={Styles.date}>{data.DayNumber}</div>
            <div className={Styles.dayMonthBox}>
              <div className={Styles.day}>{data.Day}</div>
              <div className={Styles.Month}>{data.Month}</div>
            </div>
          </div>
          <div className={Styles.glsTitle}>
            <CardActionArea
              className={Styles.glsSpeakerName}
              onClick={handleCollapse}
            >
              {data.SpeakerName}{" "}
              {collapse ? (
                <ExpandLessIcon className={Styles.icon} fontSize="default" />
              ) : (
                <ExpandMoreIcon className={Styles.icon} fontSize="default" />
              )}
            </CardActionArea>
            <div className={Styles.glsRegister}>
              <Button
                size="large"
                variant="outlined"
                className={Styles.registerButton}
              >
                {data.Status === "CLOSED" ? "Watch" : "Register"}
              </Button>
            </div>
          </div>
        </div>
        <Collapse in={collapse}>
          <div className={Styles.glsInfo}>
            <Grid
              className={Styles.glsInfoGrid}
              justify="space-between"
              container
            >
              <Grid lg={8} md={8} sm={12} xs={12} item>
                <p className={Styles.glsStatus}>
                  <i>{data.Status}</i>
                </p>
                <div dangerouslySetInnerHTML={{ __html: data.Description }} />
              </Grid>
              <Grid
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className={Styles.speakerIMGGrid}
                item
              >
                <img
                  alt="speakerPic"
                  src={"/speakers/" + data.IMG}
                  className={Styles.speakerIMG}
                />
              </Grid>
            </Grid>
          </div>
        </Collapse>
      </div>
    </Grid>
  );
};

export default Upcoming;
