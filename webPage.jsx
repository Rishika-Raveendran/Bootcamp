import React, { Component } from "react";

class Page extends Component {
  state = {
    height: 100,
    width: 100,
    colour: "white",
    text: "Button",
    border: 50
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="button"
          style={{
            border: this.state.border,
            backgroundColor: this.state.colour,
            height: this.state.height,
            width: this.state.width
          }}
        >
          {this.state["text"]}
        </button>
        <div>
          <button className="btn btn-dark btn-block ">
            Change the button attributes below
          </button>
        </div>
        <div>
          <div>
            {" "}
            <span
              style={{ fontWeight: "bold", fontSize: 25 }}
              className="badge badge-primary m-5"
            >
              HEIGHT
            </span>
            <input
              //name="height"
              ref="height"
              type="number"
              onChange={e => {
                this.handleChange("height", this.refs.height.value);
              }}
            />
            <span
              style={{ fontWeight: "bold", fontSize: 25 }}
              className="badge badge-primary m-5"
            >
              WIDTH
            </span>
            <input
              ref="width"
              type="number"
              onChange={() => {
                this.handleChange("width", this.refs.width.value);
              }}
            />
          </div>
          <div>
            <span
              style={{ fontWeight: "bold", fontSize: 25 }}
              className="badge badge-primary m-5"
            >
              COLOUR
            </span>
            <input
              //id="3"
              ref="colour"
              type="text"
              onChange={() => {
                this.handleChange("colour", this.refs.colour.value);
              }}
            />
            <span
              style={{ fontWeight: "bold", fontSize: 25 }}
              className="badge badge-primary m-5"
            >
              TEXT
            </span>
            <input
              ref="text"
              type="text"
              onChange={() => {
                this.handleChange("text", this.refs.text.value);
              }}
            />
          </div>
        </div>
        ''
      </React.Fragment>
    );
  }

  handleChange(sprop, value) {
    switch (sprop) {
      case "height":
        this.setState({ height: value });
        break;
      case "width":
        this.setState({ width: value });
        break;
      case "text":
        this.setState({ text: value });
        break;
      case "colour":
        this.setState({ colour: value });
        break;
    }
  }
}

export default Page;
