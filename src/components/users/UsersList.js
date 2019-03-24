import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { styles } from './UsersListStyles';

class UsersList extends PureComponent {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { classes, users } = this.props;

    return (
      <Card className={classes.card}>
        <List>
          {users.map((user) => (
            <ListItem key={user.id} className={classes.userLi}>
            
              <ListItemAvatar>
                <Avatar alt="Avatar photo" src={user.avatar} />
              </ListItemAvatar>

              <Typography variant="body1" className={classes.liText}>
                <Link to={`/users/${user.id}`} className={classes.link}>
                  {`${user.firstName} ${user.lastName}`}
                </Link>
              </Typography>

            </ListItem>
          ))}
        </List>
      </Card>
    );
  }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersList);