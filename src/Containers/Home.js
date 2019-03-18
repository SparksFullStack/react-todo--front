// * TODO

import React, { Component, Fragment } from 'react'
import "./Home.css";
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import jsonwebtoken from 'jsonwebtoken';

import AuthForm from '../Components/AuthForm';
import TodoList from './TodoList.js';

class Home extends Component {
    state = {
        authState: {
            signin: true,
        },
    }

    handleChangeFormType = () => {
        const newState = Object.assign({}, this.state.authState);
        newState.signin = !this.state.authState.signin;
        this.setState({ authState: newState });
    }

    // * NOTE: Could get user info from JWT here by dispatching an action if needed
    handleVerifyJWT = () => {
        let JWT = localStorage.getItem('JWT');
        let compToRender;
        jsonwebtoken.verify(JWT, process.env.REACT_APP_JWT_SECRET, (err, decoded) => {
            if (decoded) {
                compToRender = <TodoList />;
            } else {
                compToRender = <AuthForm signin={this.state.authState.signin} handleChangeFormType={this.handleChangeFormType} />;
            };
        });
        
        return compToRender;
    }

    render() {
        return (
            <Fragment>
                <Container className="home">
                    <h2 className="home--header">To-Do List</h2>
                    {this.handleVerifyJWT()}
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps)(Home);