import React, { Component, Fragment } from 'react'
import "./Home.css";
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import AuthForm from '../Components/AuthForm';
import TodoList from './TodoList.js';

class Home extends Component {
    state = {
        authState: {
            signin: true,
        }
    }

    handleChangeFormType = () => {
        const newState = Object.assign({}, this.state.authState);
        newState.signin = !this.state.authState.signin;
        this.setState({ authState: newState });
    }

    render() {
        return (
            <Fragment>
                <Container className="home">
                    <h2 className="home--header">To-Do List</h2>
                    {!this.props.user.isLoggedIn ?
                            <AuthForm signin={this.state.authState.signin} handleChangeFormType={this.handleChangeFormType} />
                        :
                            <TodoList />
                    }
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home);