import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  ButtonGroup,
} from "reactstrap";
import "../css/front.css";

class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  handleLogin(event) {
    this.toggleModal();
    console.log(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );

    event.preventDefault();
  }
  render() {
    return (
      <div className="frontpage">
        <Navbar dark>
          <div className="container">
            <NavbarBrand className="mr-auto front-nav" href="/">
              <i className="fa fa-i-cursor brand "></i>
              <i className="fa fa-etsy brand"></i>
            </NavbarBrand>

            <Nav className="ml-auto " navbar>
              <NavItem>
                <Button outline color="success" onClick={this.toggleModal}>
                  <span className="fa fa-sign-in fa-lg"></span> Login
                </Button>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 offset-1 text">
              <p>An online image editing bootcamp</p>
              <p>Choose to learn</p>
              <p>or choose to instruct</p>{" "}
              <p className="para">Edit without mercy</p>
              <p className="para"> and let the magic flow...</p>
            </div>{" "}
            <div className="col-8 col-sm-3 offset-2 offset-sm-2 form ">
              <h2>REGISTER HERE</h2>
              <hr />

              <Form>
                <FormGroup row>
                  <Label htmlFor="username">Username :</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    innerRef={(input) => (this.username = input)}
                  />
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="password">Password :</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    innerRef={(input) => (this.password = input)}
                  />
                </FormGroup>
                <FormGroup row>
                  <ButtonGroup>
                    <Button color="primary" active={true}>
                      Register as instructor
                    </Button>
                    <Button color="primary" disabled={true}>
                      Register as student
                    </Button>
                  </ButtonGroup>
                </FormGroup>
                <hr />
                <Button
                  type="submit"
                  value="submit"
                  color="success"
                  className="btn-block"
                >
                  Register
                </Button>{" "}
              </Form>

              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                  {" "}
                  <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        innerRef={(input) => (this.username = input)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        innerRef={(input) => (this.password = input)}
                      />
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="remember"
                          innerRef={(input) => (this.remember = input)}
                        />
                        Remember me
                      </Label>
                    </FormGroup>
                    <hr />
                    <Button
                      type="submit"
                      value="submit"
                      color="primary"
                      href="/home"
                    >
                      Login
                    </Button>{" "}
                    <Button color="danger" onClick={this.toggleModal}>
                      Cancel
                    </Button>
                  </Form>
                </ModalBody>
              </Modal>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default Front;
