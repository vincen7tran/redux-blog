import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;
    fetchUser(userId); 
  }

  render() {
    const { user } = this.props;
    
    if (!user) return null;

    const { name } = user;

    return (
      <div className="header">{name}</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const { users } = state;
  const { userId } = ownProps;

  const user = users.find(user => user.id = userId);

  return { user };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);