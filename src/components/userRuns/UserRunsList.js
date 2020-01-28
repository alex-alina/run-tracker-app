import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addRun, clearList, deleteRun } from '../../actions/runs';
import { connect } from 'react-redux';
// import { sortDesc } from '../../helpers/sortDesc';
import { formatDateToDDMMMYYY } from '../../helpers/dates';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import AddRunModal from './AddRunModal';
import Pagination from '.././Pagination/Pagination';
import { styles } from './UserRunsListStyles';

class UserRunsList extends PureComponent {
  state = {
    runsList: this.props.myRuns,
    currentPage: 1,
    runsPerPage: 5,
  }

  onSubmit = (distance, duration, date) => {
    this.props.addRun(this.props.userId, distance, duration, new Date(date));
    this.setState({
      runsList: this.props.myRuns,
    });
  }

  clearList = () => {
    this.props.clearList(this.props.userId);
  }

  deleteRun = (listIndex) => {
    this.props.deleteRun(this.props.userId, listIndex);
  }

  render() {
    if (!this.props.myRuns) return 'Loading your runs...';
  
    const { classes, myRuns } = this.props;
    const { currentPage, runsPerPage } = this.state;

    // Get current runs
    const indexOfLastRun = currentPage * runsPerPage;
    const indexOfFirstRun = indexOfLastRun - runsPerPage;
    const currentRuns = myRuns.slice(indexOfFirstRun, indexOfLastRun);

    // Change page
    const paginate = (pageNumber) => {
      this.setState({
        currentPage: pageNumber,
      });
    };

    return (
      <div className={classes.root}>
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
              onClick={() => this.clearList()} 
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
            {/* {sortDesc(myRuns)} */}
            {myRuns && currentRuns ?
              <List>
                {currentRuns.map((entry, runIndex) => (
                  <ListItem key={runIndex} className={classes.liItem}>
                    <div className={classes.leftSideLi}>
                      <Typography variant="body1" className={classes.liText}>
                        {formatDateToDDMMMYYY(entry.date)}
                      </Typography>

                      <Typography variant="body1" className={classes.liText}>
                        {`${entry.distance} Km in ${entry.duration} min`}
                      </Typography> 
                    </div>

                    <div className={classes.rightSideLi}>
                      <Button 
                        onClick={() => this.updateRun(runIndex)} 
                        variant="contained" 
                        size="small" 
                        color="primary"
                        className={classes.btn}
                        disabled
                      >
                        Update
                      </Button>

                      <Button 
                        onClick={() => this.deleteRun(runIndex)} 
                        variant="contained" 
                        size="small" 
                        color="primary"
                      >
                        Delete
                      </Button>
                    </div>
                  </ListItem>
                ))}
              </List>
              : null}

            <Pagination  
              runsPerPage={runsPerPage} 
              totalRuns={myRuns.length} 
              paginate={paginate} 
            />
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
  myRuns: state.users ? state.users.filter(user => user.id === state.userId)[0].runs : null,
});

export default connect(mapStateToProps, { addRun, clearList, deleteRun })(withStyles(styles)(UserRunsList));
