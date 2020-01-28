import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './UsersListStyles';
import { findMax } from '../../helpers/findMax';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class UsersList extends PureComponent {
  render() {
    const { classes, users } = this.props;

    return (
      <List className={classes.list}>
        {users.map((user) => (
          <ListItem key={user.id} className={classes.userLi}>
            <Link to={`/users/${user.id}`} className={classes.link}>
              <div className={classes.leftSideLi}>
                <ListItemAvatar>
                  <Avatar 
                    alt="Avatar photo" 
                    src={user.avatar} 
                    className={classes.avatar}
                  />
                </ListItemAvatar>

                <Typography variant="body1" className={classes.liText}>
                  {`${user.firstName} ${user.lastName}`}
                </Typography>
              </div>

              <div className={classes.rightSideLi}>
                <Typography 
                  className={classes.liTextRight}
                  variant="body1" 
                >
                  longest run = {findMax(user.runs, "distance")} km
                </Typography>
              </div>
            </Link>
          </ListItem>
        ))}
      </List>
    );
  }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersList);