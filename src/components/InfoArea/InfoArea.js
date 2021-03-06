import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/infoStyle.js";

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description, icon, vertical, info } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconHori]: !vertical,
    [classes.iconVertical]: vertical,
  });

  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <img src={icon} className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
        <p className={classes.description} dangerouslySetInnerHTML={{__html: info}}></p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
};
