import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './AddTodo.css';
import {
    Card, 
    CardBody,
    CardTitle,
    CardText,
    Button,
    InputGroup, 
    InputGroupAddon, 
    InputGroupText, 
    Input,
    Form,
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';
import { ADD_TODO } from '../Store/actions';
import { dispatch } from 'rxjs/internal/observable/range';

class AddTodo extends Component {
    state = {
        taskName: "",
        taskContent: "",
        completed: false,
        id: this.props.id,
        redirect: false,
    }

    handleRedirect = () => {
        if (this.state.redirect || !this.props.isLoggedIn){
            return <Redirect to="/" />
        } else {
            return (
                <Fragment>
                    <h2 className="addTodo--header" onClick={this.handleAddTodo}>Add To-Do</h2>
                    <Breadcrumb className="addTodo--breadcrumbs">
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Add To-Do</BreadcrumbItem>
                    </Breadcrumb>
                    <Card className="addTodo--card">
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon className="addTodo--addons" addonType="prepend">Title</InputGroupAddon>
                                    <Input value={this.state.taskName} onChange={this.handleUpdateState('taskName')} placeholder="Enter task name" />
                                </InputGroup>
                                <hr/>
                                <InputGroup>
                                    <InputGroupAddon className="addTodo--addons" addonType="prepend">Content</InputGroupAddon>
                                    <Input value={this.state.taskContent} onChange={this.handleUpdateState('taskContent')} className="addTodo--textarea" type="textarea"  placeholder="Enter task description..." />
                                </InputGroup>
                                <hr/>
                                <Button className="addTodo--button" onClick={this.handleAddTodo} color="success">Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Fragment>
            )
        }
    }

    handleAddTodo = () => {
        const newTodo = this.state;
        delete newTodo.redirect;
        
        this.props.addTodo(newTodo);
        this.setState({ redirect: true });
    }

    handleUpdateState = (formType) => (event) => {
        this.setState({ [formType]: event.target.value });
    }

    render() {
        return (
            <section className="addTodo container">
                {this.handleRedirect()}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.nextTaskID,
        isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (task) => dispatch({ type: ADD_TODO, payload: task }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);