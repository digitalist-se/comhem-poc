import React from 'react';

export default class Event extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startMinute: new Date(props.eventStart).getMinutes(),
      startHour: new Date(props.eventStart).getHours(),
      endMinute: new Date(props.eventEnd).getMinutes(),
      endHour: new Date(props.eventEnd).getHours(),
    }



  }
  componentDidMount() {


  }

  render() {
    const { eventName, eventImage, eventDesc, eventEnd, eventStart } = this.props;
    const {startMinute, startHour, endMinute, endHour} = this.state;


    return (
      <div className="Event">
        <div className="Event-image">
          <img src={eventImage + "?maxHeight=300"} role="presentation" alt="test"/>
        </div>
        <div className="Event-info">
          <h3>{eventName}</h3>
          <span className="Event-description">{eventDesc}</span>
          <p>{startHour +":"+ startMinute} - {endHour +":"+ endMinute}</p>
        </div>
      </div>
    )
  }
}
