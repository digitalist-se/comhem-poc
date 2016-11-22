import React from 'react';
import { connect } from "react-redux";
import { getEvents } from "../../actions/eventsActions";

class Channel extends React.Component {

  componentWillMount() {
    this.props.dispatch(getEvents());
  }

  render() {
    // const {events, fetched } = this.props;
    const {channelName } = this.props;
    // console.log(fetched);



    return (
      <li className="Channel">
        { channelName }

        <ul className="Events">
          {/*{
            fetched ?
            events.map( function (event, i) {
              return <li key={i}>{event.description}</li>;
            }) : null
          }*/}
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
