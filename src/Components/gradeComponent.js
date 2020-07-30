import React, { Component } from "react";
import Header from "./headerComponent";
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  FormGroup,
  Label,
  FormText,
  Input,
  Form,
  Button,
  Col,
  Row,
} from "reactstrap";
import "../css/grade.css";

class Grade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      task_id: "task1",
      temp_task: "",
      score: 1,
      reg: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleScore(event) {
    this.setState({
      grades: this.state.grades.push({
        reg: this.state.reg,
        score: this.state.score,
      }),
    });
    event.preventDefault();
  }

  handleSubmit(event) {
    this.setState({ task_id: this.state.temp_task });

    event.preventDefault();
  }

  render() {
    const images = {
      task1: [
        { reg: "Entry-a", src: "assets/images/3-edits.jpg" },
        { reg: "Entry-b", src: "assets/images/3-edits.jpg" },
        { reg: "Entry-c", src: "assets/images/3-edits.jpg" },
        { reg: "Entry-d", src: "assets/images/3-edits.jpg" },
        { reg: "Entry-e", src: "assets/images/3-edits.jpg" },
        { reg: "Entry-f", src: "assets/images/3-edits.jpg" },
      ],
      task2: [
        { reg: "Entry-g", src: "assets/images/myface.jpg" },
        { reg: "Entry-h", src: "assets/images/myface.jpg" },
        { reg: "Entry-i", src: "assets/images/myface.jpg" },
        { reg: "Entry-j", src: "assets/images/myface.jpg" },
        { reg: "Entry-k", src: "assets/images/myface.jpg" },
        { reg: "Entry-l", src: "assets/images/myface.jpg" },
      ],
      task3: [
        { reg: "Entry-m", src: "assets/images/photo.jpg" },
        { reg: "Entry-n", src: "assets/images/photo.jpg" },
        { reg: "Entry-o", src: "assets/images/photo.jpg" },
        { reg: "Entry-p", src: "assets/images/photo.jpg" },
        { reg: "Entry-q", src: "assets/images/photo.jpg" },
        { reg: "Entry-r", src: "assets/images/photo.jpg" },
      ],
    };
    let list = images[this.state.task_id].map((entry) => {
      return (
        <div className="col-10 offset-1 col-sm-5 mt-3" key={entry.reg}>
          <Card>
            <CardTitle className="card-title">Student ID:{entry.reg}</CardTitle>

            <CardBody className="cardbody">
              <img src={entry.src} alt={entry.reg} />
            </CardBody>
            <CardFooter>
              <FormGroup>
                <Label for="score">Score</Label>
                <Row>
                  <Col xs={9} sm={9}>
                    <Input
                      className="form-control"
                      type="number"
                      name="score"
                      min="1"
                      max="10"
                      placeholder="Score out of 10"
                      onChange={this.handleInput}
                    ></Input>
                  </Col>
                  <Col xs={2} sm={2}>
                    <Button
                      type="submit"
                      onSubmit={(e) => {
                        this.setState({ reg: entry.reg });
                        this.handleScore(e);
                      }}
                    >
                      <i className="fa fa-check"></i>
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </CardFooter>
          </Card>
        </div>
      );
    });

    return (
      <div className="grade">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col offset-1">
              <Form
                onSubmit={(e) => {
                  list = this.handleSubmit(e);
                }}
              >
                <FormGroup className="score">
                  <Label for="task">Task ID:</Label>
                  <Row>
                    <Col xs={8} sm={5}>
                      <Row>
                        <Input
                          type="text"
                          name="temp_task"
                          defaultValue={this.state.task_id}
                          onChange={this.handleInput}
                        />
                      </Row>
                      <Row>
                        <FormText color="muted">
                          To view the entries for a particular task enter
                          correct the task ID
                        </FormText>
                      </Row>
                    </Col>
                    <Col xs={1} sm={1}>
                      <Button type="submit" value="submit" color="primary">
                        <i className="fa fa-search"></i>
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>
              </Form>
            </div>
          </div>
          <div className="row cards">{list}</div>
        </div>
      </div>
    );
  }
}

export default Grade;
