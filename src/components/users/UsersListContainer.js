import React, { PureComponent } from 'react';
import { loadUsers } from '../../actions/users';
import { connect } from 'react-redux';
import UsersList from './UsersList';

class UsersListContainer extends PureComponent {
  componentDidMount() {
    if (this.props.users === null) this.props.loadUsers();
  }

  render() {
    if (!this.props.users) return 'Loading users ...';
    return (
      <div>
        <UsersList users={this.props.users} runs={this.props.runs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  runs: state.runs
});

export default connect(mapStateToProps, { loadUsers })(UsersListContainer);