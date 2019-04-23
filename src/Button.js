import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={e => this.props.clickHandler(e)} />
      </div>
    );
  }
}

export default Button;
