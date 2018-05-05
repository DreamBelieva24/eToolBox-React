import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import Toolbar from "../../components/Toolbar";
import { Button, Modal } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Notebook extends Component {

    state = {
        tasks: [],
        task: "",
        username: "",
        subscribed: [],
        show: false
    };

    componentDidMount() {
        this.loadTask();
        this.getUser();
    }

    getUser = () => {
        API.getUser()
            .then(res => {
                this.setState({ username: res.data.username })
                console.log(this.state.username);
            },
        )
    };

    loadTask = () => {
        API.getTasks()
            .then(res =>
                this.setState({ tasks: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteTask = id => {
        API.deleteTask(id)
            .then(res => this.loadTask())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,

        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { name } = event.target;
        console.log(name)
        if (this.state[name]) {
            API.saveTask({
                task: this.state[name],
                label: name,
                username: this.state.username

            })
                .then(res => this.loadTask())
                .catch(err => console.log(err));
        }
    };

    handleClose = () => {
        this.setState({ show: false });
      }
    
      handleShow = () => {
        this.setState({ show: true });
      }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">

                        <div id="index">
                            <Nav name="Notebook" />
                            <Toolbar />

                            <div className="row padded">


                                <div className="yellow box padded animated bounceInLeft six twelfths gapped">
                                    <h1>My Notebook</h1>
                                    <div className="row centered">
                                        <div className="one whole padded">
                                            <List>
                                                {this.state.tasks.map(task => {
                                                    if (task.username === this.state.username && task.label === "Notes") {
                                                        return (
                                                            <ListItem key={task._id}>

                                                                {task.task}

                                                                <DeleteBtn onClick={() => this.deleteTask(task._id)} />
                                                            </ListItem>
                                                        );
                                                    }
                                                })}
                                            </List>
                                            <form>
                                                <TextArea
                                                    value={this.state.Notes}
                                                    onChange={this.handleInputChange}
                                                    name="Notes"
                                                    placeholder="Add New Note"
                                                />
                                                <FormBtn
                                                    disabled={!(this.state.Notes)}
                                                    onClick={this.handleFormSubmit}
                                                    name="Notes"
                                                > +
                                                </FormBtn>
                                            </form>

                                        </div>
                                    </div>
                                </div>



                                <div className="five twelfths asphalt box padded animated bounceInRight">
                                    <button className="green animated bounceInRight" onClick={this.handleShow}>Subscribe to Notebook</button>
                                    <hr></hr>
                                    <h1>Subscribed Notebooks</h1>

                                    <div className="row centered">
                                        <div className="one whole padded">
                                            <List>
                                                {this.state.tasks.map(task => {
                                                    if (task.label === "Notes") {
                                                        return (
                                                            <ListItem key={task._id}>

                                                                {task.task}

                                                            </ListItem>
                                                        );
                                                    }
                                                })}
                                            </List>


                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </Col>
                </Row>
                <Modal
                    show={this.state.show} 
                    onHide={this.handleClose}>
                        <h1 className="centered">Subscribe to a Notebook</h1>
                        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            </ Modal.Body>
            <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
                </ Modal>
            </Container>
        );
    }
}

export default Notebook;
