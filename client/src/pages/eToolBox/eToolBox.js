import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Nav from "../../components/Nav";
import Toolbar from "../../components/Toolbar";
import Checkbox from "../../components/Checkbox";
import Completed from "../../components/Completed";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";

    var d = new Date();
    var n = d.getDay()
    
    console.log(n)
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Weekend", "Weekend"] 
var currentDay = weekdays[n-1] || "Weekend";
console.log(currentDay)


class eToolBox extends Component {
    state = {
        Monday: "",
        tasks: [],
        task: "",
        label: "",
        username: ""
        
    };

    componentDidMount() {
        this.loadTask();
       this.getUser();
    };

getUser = () => {
    API.getUser()
    .then(res => {
     this.setState({ username: res.data.username})
    console.log(this.state.username);
    },
    )};


    loadTask = () => {
        API.getTasks()
          .then(res =>
            this.setState({ tasks: res.data}),
          )
          .catch(err => console.log(err));
          
    };
    deleteTask = id => {
        API.deleteTask(id)
          .then(res => this.loadTask())
          .catch(err => console.log(err));
    };
    checkTask = id => {
        
        API.updateTask(id)
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
                        <Nav name="Dashboard"/>
                        <Toolbar />
                        <div className="row align-center padded">
                            <div className="five twelfths skip-one gapped"></div>
                            <div className="five twelfths skip-one gapped">
                                <div className="asphalt box align-center animated bounceInLeft">
                                    <h1>Quick Look </h1>
                                    <hr></hr>
                                    <div className="yellow box align-center animated bounceInLeft">
                                    <h2>Today's Tasks</h2> 
                                    <h3>{currentDay}</h3>
                                    <List>                 
                {this.state.tasks.map(task => {                
                  if (task.label === currentDay && (task.completed) % 2 == 0) {
                  return (
                  <ListItem  key={task._id}>                       
                                     
                  <Checkbox onClick={() => this.checkTask(task._id)} /> {task.task}
                  
                     
                     <DeleteBtn onClick={() => this.deleteTask(task._id)} />
                  </ListItem>
                  );} 
                  else if (task.label === currentDay && (task.completed) % 2 == 1){
                    return (
                        <ListItem  key={task._id}>                       
                                           
                        <Completed onClick={() => this.checkTask(task._id)} /> <strike>{task.task}</strike>
                        
                           
                           <DeleteBtn onClick={() => this.deleteTask(task._id)} />
                        </ListItem>
                        );  
                  }
                })}
              </List>
</div>

                                </div>
                            </div>
                            <div className="five twelfths gapped">
                                <div className="yellow box align-center triple-padded animated bounceInRight">
                                    <a className="orange button" href="/bookmarks"> <h1>Bookmarks</h1> </a>
                                </div>
                            </div>
                        </div>

                        <div className="row align-center triple-padded">
                            <div className="five twelfths skip-one gapped">
                                <div className="orange box align-center triple-padded animated bounceInLeft">
                                    <a className="orange button" href="/notebook"> <h1>Notebook</h1></a>
                                </div>
                            </div>
                            <div className="five twelfths gapped ">
                                <div className="blue box align-center triple-padded animated bounceInRight">
                                    <a className="orange button" href="/timer"> <h1>Timer</h1></a>
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

export default eToolBox;
