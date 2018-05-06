import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Nav from "../../components/Nav";
import Toolbar from "../../components/Toolbar";
import Checkbox from "../../components/Checkbox";
import Completed from "../../components/Completed";
import API from "../../utils/API";
import { Link } from "react-router-dom";
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
                        
                        <Nav name="Welcome to Your eToolBox!"/>
            
                        <div className="row align-center padded animated bounceInLeft equalize">
                        <div className="info box five twelfths skip-one gapped">
                        <div className="one fourth"><img className="toolbar" alt="logo" src="images/schedule.svg"></img></div>
                        <h3>Schedule: Organize your to do list into tasks that must be done daily, weekly or just once!
                        </h3></div>
                        
                        <div className="info box five twelfths gapped">
                        <div className="one fourth"><img className="toolbar" alt="logo" src="images/notepad.svg"></img></div>
                        <h3>Notebook: Keep a list of important notes and subscribe to other user's notes!
                        </h3></div>
                        </div>
                        <div className="row align-center padded animated bounceInRight">
                        <div className="info box five twelfths skip-one gapped">
                        <div className="one fourth"><img className="toolbar" alt="logo" src="images/bookmarks.svg"></img></div>
                        <h3>Bookmarks:  Coming Soon!
                        </h3></div>
                        
                        <div className="info box five twelfths gapped">
                        <div className="one fourth"><img className="toolbar" alt="logo" src="images/timer.svg"></img></div>
                        <h3>Timer: Coming Soon!
                        </h3></div>    
                        
                        </div>

                        <div className="row align-center padded animated bounceInRight">
                        <div className="success box one third centered gapped">
                        
                        <Link to="/signup"><h3>Sign up for an account!
                        </h3>
                        </ Link></div>    
                        
                        </div>

                        
                        
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;
