import React from 'react';

class Clock extends React.Component {
  state = {
    dateTime: new Date().toLocaleTimeString()
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      dateTime: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <div className="form-group form-control">
        <span>
          {this.state.dateTime}
        </span>
      </div>
    );
  }
}

export default Clock;
