import React from 'react';
import Channel from '../Channel/';
import { connect } from "react-redux";
import { getChannels } from "../../actions/ChannelActions";

class Channels extends React.Component {

  constructor(props) {
    super(props)

    this.direction = this.direction.bind(this);

  }


  componentWillMount() {
    this.props.dispatch(getChannels());
  }
  direction(direction) {
    console.log(direction)
    this.props.dispatch(getChannels(direction));
  }


  render() {
    const { channels, fetched} = this.props.channels;

    return (
      <div>
        <h2>Kanaler</h2>
        <ul className="Channels">
          {
            fetched ?
            channels.map( function (channel, i) {
              return <Channel
                direction = {this.direction}
                key= {i}
                channelName= {channel.name}
                darkImage = {channel.imageOnDarkURL}
                lightImage = {channel.imageOnLightURL}
                events = {channel.events}
                />;
            },this) : null
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(Channels);
