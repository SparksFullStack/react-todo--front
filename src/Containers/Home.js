import React, { Component } from 'react'
import "./Home.css";
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';

import AuthForm from '../Components/AuthForm';

class Home extends Component {
    state = {
        signin: false,
    }

    handleChangeFormType = () => {
        this.setState({ signin: !this.state.signin })
    }

    render() {
        return (
            <Container className="home">
                <h2 className="home--header">Todo List</h2>
                {!this.props.user.isLoggedIn ?
                        <AuthForm signin={this.state.signin} handleChangeFormType={this.handleChangeFormType} />
                    :
                        <h1>Add other stuff here</h1>
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