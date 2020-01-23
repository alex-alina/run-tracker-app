import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import runner from '../../assets/images/Runner.png';
import { styles } from './StartScreenStyles';

class StartScreen extends PureComponent {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <div className={classes.positionMedia}>
          <img
            className={classes.media}
            src={runner}
            title="Runner"
            alt="Blue runner clip art"
          />
          <img
            className={classes.media}
            src={runner}
            title="Runner"
            alt="Blue runner clip art"
          />
          <img
            className={classes.media}
            src={runner}
            title="Runner"
            alt="Blue runner clip art"
          />
        </div>

        <CardContent>
          <Typography variant="h5" component="h2">
            Running Tracker App
          </Typography>
          <Typography variant="body1" component="p">
            Running together is fun! Bring your friends or join one of our running groups.
          </Typography>
          <Typography variant="body1" component="p">
            All group members can set a goal to run towards to (pun intended), add the date, length and duration of each run and check up the stats of other group members with our running tracking app.
          </Typography>
        </CardContent>

        <CardActions>
          <div className={classes.positionStartBtn}>
            <Button 
              variant="contained" 
              size="large"
              color="secondary" 
              className={classes.button} 
              component={Link} to="/users"
            >
              Go to group stats
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
}

StartScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(StartScreen);