import React from 'react';

export default class Event extends React.Component {

  render() {
    const { eventName, eventImage, eventDesc, eventEnd, eventStart } = this.props;

    return (
      <div className="Event">
        <div className="Event-image">
          <img src={eventImage} />
        </div>
        <div className="Event-info">
          <h3>{eventName}</h3>
          <span className="Event-description">{eventDesc}</span>
        </div>
      </div>
    )
  }
}
