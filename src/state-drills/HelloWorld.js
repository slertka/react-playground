import React from "react";

export default class HelloWorld extends React.Component {
  state = {
    who: "world"
  };

  clickHandler = event => {
    const name = event.target.innerHTML.toLowerCase();
    return this.setState({
      who: name
    });
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={e => this.clickHandler(e)}>World</button>
        <button onClick={e => this.clickHandler(e)}>Friend</button>
        <button onClick={e => this.clickHandler(e)}>React</button>
      </div>
    );
  }
}
