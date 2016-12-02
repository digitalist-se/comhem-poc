import React from 'react';
import Event from '../Event'
//import { connect } from "react-redux";
//
//import { getChannels } from "../../actions/ChannelActions";

export default class Channel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      swipe: (((props.events.length-2) * 600)*-1),
      fetched: 1
    }
  }


  swipeEvents(direction){
    // Send direction and channel id to fetch the next events.
    let channelID = this.props.channelID;
    this.props.direction(direction, channelID, this.props.index, this.props.events.length);

    
    let newSwipe = this.state.swipe;
    if (direction === 'left') {
      newSwipe += 600;
      newSwipe > 0 ? newSwipe = 0 : null
      this.setState({
        swipe: newSwipe
      })
    }
    else {
      newSwipe -= 600;
      this.setState({
        swipe: newSwipe
      })
    }
  }

  render() {
    const { channelName, prgSvcID, events, darkImage, lightImage, qualifiers } = this.props;
    const styles = {
      transform: `translateX(${this.state.swipe}px)`
    };

    return (
      <li className="Channel">
        <div className="Channel-col-icon">
          <img src= {lightImage} role="presentation" alt="test"/>
        </div>
        <div className="Channel-col-preview">
          <div className="Channel-arrow Channel-arrow--left" onClick={() => this.swipeEvents("left")}><span></span></div>
          <div className="Channel-arrow Channel-arrow--right" onClick={() => this.swipeEvents("right")}><span></span></div>
          <div className="Channel-col-preview-inner" style={styles}>
            {events.map(function(event, i){
              return <Event
                key={i}
                eventName={event.programName}
                eventImage={event.imageURL}
                eventDesc={event.description}
                eventEnd={event.ends}
                eventStart={event.starts}
                />
            })}
          </div>
      </div>
      </li>
    )
  }
}
