import React, { Component } from "react";
import Header from "./headerComponent";
import { Form, FormGroup, Input, Label, FormText, Button } from "reactstrap";
import "../css/create.css";

class Create extends Component {
  state = {
    file: "",
    level: "",
    task_id: "",
    instructions: "",
  };
  handleSubmit = (event) => {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  };
  handleChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  render() {
    return (
      <div className="create">
        <Header />
        <div className="container">
          <div className="row task-form">
            <div className="col-10 offset-xs-1 col-sm-4  ">
              <h2>CREATE A TASK</h2>
              <hr />
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="imageFile">Upload the original image file</Label>
                  <Input
                    type="file"
                    name="file"
                    id="imageFile"
                    onChange={this.handleChange}
                  />
                  <FormText color="muted">
                    The file must have .jpeg or .jpg extension(If you are using
                    a smartphone, see image preview below)
                  </FormText>
                </FormGroup>
                <FormGroup tag="fieldset">
                  <legend>Task level</legend>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="level"
                        onClick={() => {
                          this.setState({ level: "beginner" });
                        }}
                      />{" "}
                      Beginner level task{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="level"
                        onClick={() => {
                          this.setState({ level: "intermediate" });
                        }}
                      />{" "}
                      Intermediate level task{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input
                        type="radio"
                        name="level"
                        onClick={() => {
                          this.setState({ level: "advanced" });
                        }}
                      />{" "}
                      Advanced level task
                    </Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="task_id">Task ID</Label>
                  <Input
                    type="text"
                    name="task_id"
                    onChange={() => {
                      this.setState({
                        task_id: this.value,
                      });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="instructions">Editing instructions</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="instructions"
                    rows="8"
                    onChange={(e) => {
                      this.setState({ instructions: e.target.value });
                    }}
                  />
                </FormGroup>
                <hr />
                <Button type="submit" value="submit" color="success">
                  Submit
                </Button>
              </Form>
            </div>
            <div className="col-10 offset-1 col-sm-5 offset-sm-3 ">
              <div className="container">
                <div className="row">
                  <div className="col-8 offset-2 ">
                    <h2>IMAGE PREVIEW</h2>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 offset-1 ">
                    <img src={this.state.file} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
