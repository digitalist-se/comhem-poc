import React from 'react';
import { connect } from "react-redux";
import { getEvents } from "../../actions/eventsActions";

class Channel extends React.Component {

  componentWillMount() {
    this.props.dispatch(getEvents());
  }

  render() {
    const { title, prgSvcID, events } = this.props;
    const channelEvents = events.events;
    const fetched = events.fetched;

    return (
      <li className="Channel">
        { title }
        <ul className="Events">
          {
            fetched ?
            channelEvents.map( function (event, i) {
              return <li key={i} className="Events-item">{event.description}</li>;
            }) : null
          }
        </ul>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(Channel);
