import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { styles } from './UserWeightListStyles';
import AddWeightModal from './AddWeightModal';

class UsersList extends PureComponent {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { classes, user } = this.props;

    return (
      <Card className={classes.card}>
        <Typography variant="h5">{`Hello ${user.firstName}`}</Typography>
        <div className={classes.graphContainer}>

        </div>
        <div className={classes.listContainer}>
          <div className={classes.positionBtns}>
            <AddWeightModal />
            <Button variant="contained" size="medium" color="primary" className={classes.button} component={Link} to="/">
              Clear
            </Button>
          </div>
          <div className={classes.weightList}>
            <List>
              {['one', 'two', 'three'].map((user) => (
                <ListItem key={user.id} className={classes.userLi}>
                  <Typography variant="body1" className={classes.liText}>12.12.2000</Typography>
                  <Button variant="contained" size="small" color="primary" className={classes.button} component={Link} to="/">
                    Delete
                  </Button>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Card>
    );
  }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersList);