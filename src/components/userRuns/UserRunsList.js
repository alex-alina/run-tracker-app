import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addRun, clearList, deleteRun } from '../../actions/runs';
import { connect } from 'react-redux';
import { sortDesc } from '../../helpers/sortDesc';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import AddRunModal from './AddRunModal';
import { styles } from './UserRunsListStyles';

class UserRunsList extends PureComponent {

  onSubmit = (distance, duration, date) => {
    this.props.addRun(this.props.userId, distance, duration, new Date(date));
  }

  clearList = () => {
    this.props.clearList(this.props.userId);
  }

  deleteRun = (listIndex) => {
    this.props.deleteRun(this.props.userId, listIndex);
  }

  render() {
    const { classes, user } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.welcome} variant="h5">
          {`Hi ${user.firstName}`}
        </Typography>

        <div className={classes.listContainer}>
          <div className={classes.positionBtns}>
            <AddRunModal onSubmit={this.onSubmit} />

            <Button 
              component={Link} to="/users" 
              variant="contained" 
              size="medium" 
              color="primary"
              className={classes.button} 
            >
              Back
            </Button>

            <Button 
              onClick={this.clearList} 
              variant="contained" 
              size="medium" 
              color="secondary" 
              className={classes.button} 
            >
              Clear All
            </Button>
          </div>

          <div className={classes.runsList}>
            {sortDesc(user.runs)}
            {user.runs ?
              <List>
                {user.runs.map((entry, runIndex) => (
                  <ListItem key={runIndex} className={classes.liItem}>
                    <div className={classes.leftSideLi}>
                      <Typography variant="body1" className={classes.liText}>
                        {`
                          ${entry.date.getDate()} -
                          ${entry.date.getMonth() + 1} -
                          ${entry.date.getFullYear()}:
                        `}
                      </Typography>
                      <Typography variant="body1" className={classes.liText}>
                        {`${entry.distance} Km in ${entry.duration} min`}
                      </Typography> 
                    </div>

                    <Button 
                      onClick={() => this.deleteRun(runIndex)} 
                      variant="contained" 
                      size="medium" 
                      color="primary"
                    >
                      Delete
                    </Button>
                  </ListItem>
                ))}
              </List>
              : null}
          </div>
        </div>
      </div>
    );
  }
}

UserRunsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  userId: state.userId,
});

export default connect(mapStateToProps, { addRun, clearList, deleteRun })(withStyles(styles)(UserRunsList));
