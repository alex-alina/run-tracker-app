import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import runner from '../../assets/images/Runner.png';
import { styles } from './RunnerImgStyles';

const RunnerImg = (props) => {
  const { classes } = props;
  return (
    <img
      className={classes.media}
      src={runner}
      title="Runner"
      alt="Blue runner clip art"
    />
  );
};

RunnerImg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(RunnerImg);