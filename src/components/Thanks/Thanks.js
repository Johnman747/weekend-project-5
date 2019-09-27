import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';


class Thanks extends Component {

    handelClick=()=>{
        
    }

render() {
    return (
    <Router>
        <h1>Thank you!</h1>
        <Link to='/'><button onClick={this.handelClick}>Leave New Feedback</button></Link>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Thanks);