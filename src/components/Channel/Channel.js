import React from 'react';
import { connect } from "react-redux";
import { getEvents } from "../../actions/eventsActions";

class Channel extends React.Component {
  componentWillMount() {
    this.props.dispatch(getEvents());
  }

  render() {
    const { title, prgSvcID, events } = this.props;
    const fetched = events.fetched;
    const filteredEvents = events.events.filter(  i => i.prgSvcID === prgSvcID );

    return (
      <li className="Channel">
        { title }
        <ul className="Events">
          {
            fetched ?
            filteredEvents.map( function (event, i) {
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
