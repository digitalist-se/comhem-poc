import React from 'react';

class Channel extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="Channel">
        { title }
      </div>
    )
  }
}

export default Channel;
