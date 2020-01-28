import React, { PureComponent } from 'react';
import { loadUsers } from '../../actions/users';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { styles } from './UsersContainerStyles';
import UsersList from './UsersList';
import runTogether from '../../assets/images/runTogether.jpg';

class UsersContainer extends PureComponent {
  componentDidMount() {
    if (this.props.users === null) this.props.loadUsers();
  }
 
  render() {
    const { classes } = this.props;
    
    if (!this.props.users) return 'Loading users ...';
    
    return (
      <div className={classes.root}>
        <img
          className={classes.groupCover}
          src={runTogether}
          alt="Two people running on a mountain track"
        />
        <UsersList users={this.props.users} />
      </div>
    );
  }
}

UsersContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps, { loadUsers })(withStyles(styles)(UsersContainer));