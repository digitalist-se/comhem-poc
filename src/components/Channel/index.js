import React from 'react';
import Event from '../Event'

export default class Channel extends React.Component {

  constructor() {
    super()
    this.state = {
      swipe: 0
    }
  }


  swipeEvents(direction){
    let newSwipe = this.state.swipe;

    if (direction === 'left') {
      newSwipe += 600;


      newSwipe > 0 ? newSwipe = 0 : null

      this.setState({
        swipe: newSwipe
      })
    }
    else {
      newSwipe -= 300;
      this.setState({
        swipe: newSwipe
      })
    }
  }

  render() {
    const { channelName, prgSvcID, events, darkImage, lightImage, qualifiers } = this.props;
    const styles = {
      transform: `translate(${this.state.swipe}px)`
    };

    return (
      <li className="Channel">
        <div className="Channel-col-icon">
          <img src= {lightImage} />
        </div>
        <div className="Channel-col-preview">
          <div className="Channel-arrow Channel-arrow--left" onClick={() => this.swipeEvents("left")}></div>
          <div className="Channel-arrow Channel-arrow--right" onClick={() => this.swipeEvents("right")}></div>
          <div className="Channel-col-preview-inner" style={styles}>
            {events.map(function(event, i){
              return <Event
                key={i}
                eventName={event.programName}
                eventImage={event.imageURL}
                />
            })}
          </div>
      </div>
      </li>
    )
  }
}
