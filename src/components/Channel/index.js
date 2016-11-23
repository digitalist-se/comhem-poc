import React from 'react';

export default class Channel extends React.Component {

  render() {
    const { channelName, prgSvcID, events, darkImage, lightImage, qualifiers } = this.props;
        
    // const fetched = events.fetched;
    // const filteredEvents = events.events.filter(  i => i.prgSvcID === prgSvcID );
    // console.log(filteredEvents);

    return (
      <li className="Channel">
        <div className="Channel-col-icon">
        <img src= {lightImage} />
        </div>
        <div className="Channel-col-preview">

        </div>

      </li>
    )
  }
}
