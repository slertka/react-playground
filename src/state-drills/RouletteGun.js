import React from "react";

export default class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false
  };

  componentWillUnmount() {
    this.timeout = clearInterval(this.timeout);
  }

  clickHandler = () => {
    this.setState({
      spinningTheChamber: true
    });

    this.timeout = setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 8 + 1);
      this.setState({
        spinningTheChamber: false,
        chamber: randomNum
      });
    }, 2000);
  };

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;

    if (spinningTheChamber) {
      return "spinning the chamber and pulling the trigger! ...";
    }

    if (chamber === bulletInChamber) {
      return "BOOM!!!!";
    }

    return "you're safe!";
  }

  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={e => this.clickHandler()}>Pull the trigger!</button>
      </div>
    );
  }
}
