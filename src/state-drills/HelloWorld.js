import React from "react";

export default class HelloWorld extends React.Component {
  state = {
    who: "world"
  };

  clickHandler = event => {
    console.log(event.target.text());
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button>World</button>
        <button>Friend</button>
        <button>React</button>
      </div>
    );
  }
}
