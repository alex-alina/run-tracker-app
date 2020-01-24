import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styles } from './StartScreenStyles';
import homePageText from '../../utils/staticContent';
import RunnerImg from '../runnerImg/RunnerImg';

class StartScreen extends PureComponent {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { classes } = this.props;
    const { appTitle, appDescription } = homePageText;

    return (
      <Card className={classes.card}>
        <div className={classes.positionMedia}>
          <RunnerImg />
          <RunnerImg />
          <RunnerImg />
        </div>

        <CardContent>
          <Typography variant="h5" component="h2" className={classes.appTitle}>
            {appTitle}
          </Typography>
          
          <Typography variant="body1" className={classes.introParagraph}>
            {appDescription}
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