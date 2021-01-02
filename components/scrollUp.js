import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import Styles from "../styles/ScrollUp.module.css";

import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";

const ScrollUp = () => {
  return (
    <div>
      <ScrollUpButton
        ContainerClassName={Styles.AnyClassForContainer}
        TransitionClassName={Styles.AnyClassForTransition}
        EasingType="easeInQuad"
      >
        <ExpandLessRoundedIcon style={{ color: "#000" }} />
      </ScrollUpButton>
    </div>
  );
};

export default ScrollUp;
