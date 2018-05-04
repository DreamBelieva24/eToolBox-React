import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import Toolbar from "../../components/Toolbar";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Notebook extends Component {
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
            this.setState({ tasks: res.data})
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
                       <Nav name="Notebook"/>
                       <Toolbar />
    
    <div className="row">
    
    
            <div className="yellow box padded animated bounceInLeft six twelfths gapped">
                <h1>My Notebook</h1>
                <div className="row centered">
                    <div className="one whole padded">
                    <List>                 
                {this.state.tasks.map(task => {                
                  if (task.label === "Notes") {
                  return (
                  <ListItem  key={task._id}>                       
                                        
                        {task.task}
                    
                    <DeleteBtn onClick={() => this.deleteTask(task._id)} />
                  </ListItem>
                  );}
                })}
              </List>
              <form>
                <Input
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
    <button className="green animated bounceInUp">Subscribe to Notebook</button>
    <hr></hr>
                <h1>Subscribed Notebooks</h1>
                
                <div className="row centered">
                    <div className="one whole padded">
                    <List>                 
                {this.state.tasks.map(task => {                
                  if (task.label === "Notes") {
                  return (
                  <ListItem  key={task._id}>                       
                                        
                        {task.task}
                    
                  </ListItem>
                  );}
                })}
              </List>
            
            
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

export default Notebook;
