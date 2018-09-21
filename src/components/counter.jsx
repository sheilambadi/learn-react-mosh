import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = product => {
    console.log(product);

    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="No Image" /> */}
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 23 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}

        {/* {this.state.tags.length === 0 && "No tags to display"}

        {this.renderTags()} */}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>Nothing to display</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
