import React from 'react';

export default class Event extends React.Component {

  render() {
    const { eventName, eventImage } = this.props;

    return (
      <div className="Event">
        <div className="Event-image">
          <img src={eventImage} />
        </div>
        <div className="Event-info">
          <h3>Event {eventName}</h3>
        </div>
      </div>
    )
  }
}
