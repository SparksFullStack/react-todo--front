import React, { Component } from 'react'
import "./Home.css";
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';

import AuthForm from '../Components/AuthForm';
import TodoList from './TodoList.js';

class Home extends Component {
    state = {
        authState: {
            signin: false,
        }
    }

    handleChangeFormType = () => {
        const newState = Object.assign({}, this.state.authState);
        newState.signin = !this.state.authState.signin;
        this.setState({ authState: newState });
    }

    render() {
        return (
            <Container className="home">
                <h2 className="home--header">Todo List</h2>
                {!this.props.user.isLoggedIn ?
                        <AuthForm signin={this.state.authState.signin} handleChangeFormType={this.handleChangeFormType} />
                    :
                        <TodoList />
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home);