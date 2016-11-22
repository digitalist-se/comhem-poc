import React from 'react';
import Channel from '../Channel/Channel';
import { connect } from "react-redux";
import { getChannels } from "../../actions/channelActions";

class Channels extends React.Component {

  componentWillMount() {
    this.props.dispatch(getChannels());
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
                key= {i}
                channelName= {channel.name}
                prgSvcID= {channel.prgSvcID}
                qualifiers = {channel.qualifiers}
                darkImage = {channel.imageOnDarkURL}
                lightImage = {channel.imageOnLightURL}
                />;
            }) : null
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
