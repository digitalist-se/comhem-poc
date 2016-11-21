import React from 'react';

class Channel extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <li className="Channel">
        { title }
      </li>
    )
  }
}

export default Channel;
