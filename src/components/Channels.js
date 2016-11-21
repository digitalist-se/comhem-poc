import React from 'react';
import Channel from './Channel';

export default class Channels extends React.Component {
  render() {
    const { channels } = this.props;

    return (
      <ul className="Channels">
        {channels.map((channel, i) => {
          return <Channel
            key={i}
            title={channel.title}
          />
        })}
      </ul>
    )
  }
}
