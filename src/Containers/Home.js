import React, { Component } from 'react'
import "./Home.css";
import { connect } from 'react-router';
import { Container } from 'reactstrap';

import AuthForm from '../Components/AuthForm';

class Home extends Component {
    state = {
        formType: 'login'
    }

    render() {
        return (
            <Container className="home">
                <h2 className="home--header">Todo List</h2>
                <AuthForm formType={this.state.formType} />
            </Container>
        )
    }
}

export default Home;