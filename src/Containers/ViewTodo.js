// * TODO
// Edit text styling

//* OPTIONAL
// Add status of todo
// Add icons instead of buttons

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './ViewTodo.css';
import {
    Card, 
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';
import { DELETE_TODO } from '../Store/actions';

class ViewTodo extends Component {
    state = {
        redirect: false,
    }

    handleDeleteTodo = () => {
        this.setState({ redirect: true });
        this.props.deleteTodo(this.props.location.state.id);
    }

    handleRedirect = () => {
        if (!this.props.location.state || this.state.redirect === true) {
            return <Redirect to="/" />
        } else {
            const { taskName, taskContent, completed, id } = this.props.location.state;
            return (
                <Fragment>
                    <h2 className="viewTodo--header">View To-Do</h2>
                    <Breadcrumb className="viewTodo--breadcrumbs">
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>View To-Do</BreadcrumbItem>
                    </Breadcrumb>
                    <Card className="viewTodo--card">
                        <CardBody>
                            <CardTitle className="viewTodo--card-title h3">{taskName}</CardTitle>
                            <CardSubtitle style={completed ? { color: "#28a745" } : { color: "#dc3545" }} className="h6">{completed ? "Complete" : "Incomplete"}</CardSubtitle>
                            <hr/>
                            <CardText className="viewTodo--content">{taskContent}</CardText>
                            <hr/>
                            <div className="viewTodo--buttons-container">
                                <Link to={{
                                    pathname: '/edit_todo',
                                    state: this.props.location.state
                                }} className="btn btn-primary viewTodo--buttons">Edit</Link>
                                <Button onClick={this.handleDeleteTodo} outline color="danger" className="viewTodo--buttons">Delete</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Fragment>
            )
        }
    }

    render() {
        return (
            <section className="viewTodo container">
                {this.handleRedirect()}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch({ type: DELETE_TODO, payload: id }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTodo);