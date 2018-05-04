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



class Main extends Component {
   
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
                                    <h1>Quick Look</h1>
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
                        <div className="row align-center triple-padded">
                            <div className="one third centered">
                                <button className="green animated bounceInUp padded">Set As Homepage</button></div>
                        </div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default eToolBox;
