import React from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0,
    reaction: ""
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const newCount = this.state.count + 1;
      if (newCount >= 8) {
        return this.setState({
          count: 0,
          reaction: "BOOM!!!!"
        });
      } else if (newCount % 2 === 0) {
        return this.setState({
          count: newCount,
          reaction: "tick"
        });
      } else {
        return this.setState({
          count: newCount,
          reaction: "tock"
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.reaction}</p>
      </div>
    );
  }
}
