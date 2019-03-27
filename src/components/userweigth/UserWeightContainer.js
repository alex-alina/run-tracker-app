import React, { PureComponent } from 'react';
import { loadUser } from '../../actions/users';
import { connect } from 'react-redux';
import UserWeightList from './UserWeightList';


class UserWeightContainer extends PureComponent {
  componentDidMount() {
    const currentUserId = Number(this.props.match.params.id);
    if (this.props.user === null || this.props.user.id !== currentUserId) this.props.loadUser(currentUserId);
  }

  render() {
    if (!this.props.user) return 'Loading your data...';
    return (
      <div>
        <UserWeightList user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { loadUser })(UserWeightContainer);