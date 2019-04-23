import React from "react";

class Accordian extends React.Component {
  static defaultProps = {
    sections: []
  };

  state = {
    activeTabIndex: null
  };

  displayContent(index) {
    this.setState({
      activeTabIndex: index
    });
  }

  renderAccordian() {
    return this.props.sections.map((tab, index) => (
      <li>
        <button key={index} onClick={() => this.displayContent(index)}>
          {tab.title}
        </button>
        <p>{index === this.state.activeTabIndex ? tab.content : ""}</p>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <ul>{this.renderAccordian()}</ul>
      </div>
    );
  }
}

export default Accordian;
