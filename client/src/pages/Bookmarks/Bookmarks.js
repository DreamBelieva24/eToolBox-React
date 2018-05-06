import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import Toolbar from "../../components/Toolbar";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Bookmarks extends Component {
    state = {
        tasks: [],
        task: "",
    };

    componentDidMount() {
        this.loadTask();
    }

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
                label: name

            })
                .then(res => this.loadTask())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div id="index">
                            <Nav name="Bookmarks" />
                                <Toolbar />
                                    <div className="row align-center triple-padded">
                                         <div className="one third center">
                                             <button className="orange animated bounceInUp">Add Folder</button>
                                        </div>
                                    </div>
                                    <div className="row align-center triple-padded">
                                         <div className="three twelfths skip-one gapped">
                                              <div className="asphalt box align-center triple-padded animated bounceInLeft">
                                                 <h1>School</h1>
                                                     <div className="row align-center centered">
                                                        <List>
                                                           {this.state.tasks.map(task => {
                                                            if (task.label === "SchoolBookmark") {
                                                                return (
                                                                    <ListItem key={task._id}>
                                                                        <a href={"/task/" + task._id} src={task.task}>
                                                                           {task.task}
                                                                        </a>
                                                                     <DeleteBtn onClick={() => this.deleteTask(task._id)} />
                                                                     </ListItem>
                                                                    )
                                                                 }
                                                            else
                                                                return null
                                                                 })}
                                                         </List>
                                                             <br></br>
                                                             <form>
                                                          <Input
                                                            value={this.state.SchoolBookmark}
                                                            onChange={this.handleInputChange}
                                                            name="SchoolBookmark"
                                                            placeholder="Add New Bookmark"
                                                             />
                                                          <FormBtn
                                                            disabled={!(this.state.SchoolBookmark)}
                                                            onClick={this.handleFormSubmit}
                                                            name="SchoolBookmark"
                                                            > +
                                                        </FormBtn>
                                                             </form>
                                                     </div>
                                                 </div>
                                             </div>
                                         <div className="three twelfths gapped">
                                            <div className="yellow box align-center triple-padded animated bounceInLeft">
                                                <h1>Work</h1>
                                                    <div className="row align-center centered">
                                                         <div className="orange box four twelfths ">
                                                            <i className="icon-twitter icon-4x"></i>
                                                        </div>
                                                        <div className="orange box four twelfths ">
                                                            <i className="icon-twitter icon-4x"></i>
                                                        </div>
                                                        <div className="orange box four twelfths ">
                                                             <i className="icon-twitter icon-4x"></i>
                                                        </div>
                                                    </div>
                                                    <div className="row align-center centered">
                                                        <div className="orange box four twelfths ">
                                                            <i className="icon-twitter icon-4x"></i>
                                                        </div>
                                                    <div className="orange box four twelfths ">
                                                    </div>
                                                    <div className="orange box four twelfths ">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Bookmarks;
