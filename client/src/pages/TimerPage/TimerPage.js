import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Nav from "../../components/Nav";
// import API from "../../utils/API";
import Toolbar from "../../components/Toolbar";
import Timer from "../../components/Timer";
// import Unstarred from "../../components/Unstarred";
// import Starred from "../../components/Starred";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, FormBtn } from "../../components/Form";
import "./Timer.css";



class TimerPage extends Component {

    render() {
       return( 
           <div>
       <Nav  name="Timer"  />
       <Toolbar />
       <Timer />
       </div>
       )}
}

export default TimerPage;