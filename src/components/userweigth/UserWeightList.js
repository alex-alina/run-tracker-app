import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addWeight, clearList, deleteWeight } from '../../actions/weights';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { styles } from './UserWeightListStyles';
import AddWeightModal from './AddWeightModal';

class UserWeightList extends PureComponent {

  onSubmit = (weight, date) => {
    this.props.addWeight(this.props.user.id, weight, new Date(date));
  }

  clearList = () => {
    this.props.clearList(this.props.user.id);
  }

  deleteWeight = (listIndex) => {
    this.props.deleteWeight(this.props.user.id, listIndex);
  }

  render() {
    const { classes, user, weights } = this.props;

    return (
      <Card className={classes.card}>
        <Typography className={classes.welcome} variant="h5">{`Hello ${user.firstName}`}</Typography>
        <div className={classes.listContainer}>
          <div className={classes.positionBtns}>
            <AddWeightModal onSubmit={this.onSubmit} />
            <div>
              <Button onClick={this.clearList} variant="contained" size="medium" color="primary" className={classes.button} >
                Clear
              </Button>
            </div>

          </div>
          <div className={classes.weightList}>
            {weights[user.id] ?
              <List>
                {weights[user.id].map((entry, index) => (
                  <ListItem key={index} className={classes.liItem}>
                    <Typography variant="body1" className={classes.liText}>
                      {`${entry.weight} Kg - ${entry.date.getDate()}.${entry.date.getMonth() + 1}.${entry.date.getFullYear()}`}
                    </Typography>
                    <Button
                      onClick={() => this.deleteWeight(index)}
                      variant="contained"
                      size="small"
                      color="primary"
                      className={classes.button}
                    >
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

UserWeightList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  weights: state.weights
});

export default connect(mapStateToProps, { addWeight, clearList, deleteWeight })(withStyles(styles)(UserWeightList));
