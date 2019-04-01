import React, { PureComponent } from 'react';
import { loadUser } from '../../actions/users';
import { connect } from 'react-redux';
import UserRunsList from './UserRunsList';


class UserRunsContainer extends PureComponent {
  componentDidMount() {
    const currentUserId = Number(this.props.match.params.id);
    if (this.props.userId === null || this.props.userId !== currentUserId) this.props.loadUser(currentUserId);
  }

  render() {
    if (!this.props.userId || !this.props.users) return 'Loading your data...';
    const user = this.props.users.filter(user => user.id === this.props.userId)[0];
    return (
      <div>
        <UserRunsList user={user} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.userId,
  users: state.users,
});

export default connect(mapStateToProps, { loadUser })(UserRunsContainer);