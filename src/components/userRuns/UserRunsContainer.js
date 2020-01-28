import React, { PureComponent } from 'react';
import { loadUser } from '../../actions/users';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './UserRunsContainerStyles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import UserRunsList from './UserRunsList';
import runningShoes from '../../assets/images/runningShoes.jpg';
import LineGraph from '../LineGraph/LineGraph';

class UserRunsContainer extends PureComponent {
  componentDidMount() {
    const currentUserId = Number(this.props.match.params.id);
    if (this.props.userId === null || this.props.userId !== currentUserId) this.props.loadUser(currentUserId);
  }

  render() {
    const { classes } = this.props;

    if (!this.props.userId || !this.props.users) return 'Loading your data...';
    
    const user = this.props.users.filter(user => user.id === this.props.userId)[0];

    return (
      <Grid container spacing={0} component="div" className={classes.root} >
        <Grid item xs={12} lg={12} className={classes.firstGridItem}>
          <img
            className={classes.profileImg}
            src={runningShoes}
            title="Running Shoes"
            alt="Hand holding a pair of Nike running shoes"
          />

          <Typography className={classes.welcome} variant="h5">
            {`Hi ${user.firstName}`}
          </Typography>
        </Grid>
        
        <Grid item xs={12} lg={6} className={classes.secondGridItem}>
          <div className={classes.chartContainer}>
            <Typography className={classes.title} variant="h5">
              Your progress overview
            </Typography>
          
            <LineGraph
              name={user.name}
              runs={user.runs}
            />
          </div>
        </Grid>

        <Grid item xs={12} lg={6} className={classes.secondGridItem}>
          <UserRunsList user={user}/>
        </Grid>
      </Grid>
    );
  }
}

UserRunsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  userId: state.userId,
  users: state.users,
});
export default connect(mapStateToProps, { loadUser })(withStyles(styles)(UserRunsContainer));