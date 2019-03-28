import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addRun, clearList, deleteRun } from '../../actions/runs';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import AddRunModal from './AddRunModal';
import { styles } from './UserRunsListStyles';

class UserRunsList extends PureComponent {

  onSubmit = (distance, duration, date) => {
    this.props.addRun(this.props.user.id, distance, duration, new Date(date));
  }

  clearList = () => {
    this.props.clearList(this.props.user.id);
  }

  deleteRun = (listIndex) => {
    this.props.deleteRun(this.props.user.id, listIndex);
  }

  render() {
    const { classes, user, runs } = this.props;

    return (
      <Card className={classes.card}>
        <Typography className={classes.welcome} variant="h5">{`Hello ${user.firstName}`}</Typography>

        <div className={classes.listContainer}>
          <div className={classes.positionBtns}>
            <AddRunModal onSubmit={this.onSubmit} />
            <Button onClick={this.clearList} variant="contained" size="medium" color="primary" className={classes.button} >
              Clear
            </Button>
          </div>

          <div className={classes.runsList}>
            {/* add a header to the list "Distance   Duration   Date" */}
            {runs[user.id] ?
              <List>
                {runs[user.id].map((entry, index) => (
                  <ListItem key={index} className={classes.liItem}>

                    <Typography variant="body1" className={classes.liText}>
                      {`${entry.distance} Km : ${entry.duration} min : ${entry.date.getDate()}.${entry.date.getMonth() + 1}.${entry.date.getFullYear()}`}
                    </Typography>

                    <Button onClick={() => this.deleteRun(index)} variant="contained" size="small" color="primary">
                      Delete
                    </Button>

                  </ListItem>
                ))}
              </List>
              : null}
          </div>
        </div>
      </Card>
    );
  }
}

UserRunsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  runs: state.runs
});

export default connect(mapStateToProps, { addRun, clearList, deleteRun })(withStyles(styles)(UserRunsList));
