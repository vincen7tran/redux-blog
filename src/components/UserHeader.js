import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;
    fetchUser(userId); 
  }

  render() {
    const { users, userId } = this.props;
    const user = users.find(user => user.id === userId);

    if (!user) return null;

    const { name } = user;

    return (
      <div className="header">{name}</div>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state;

  return { users };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);