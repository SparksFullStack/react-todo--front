import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './EditTodo.css';
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
} from 'reactstrap';
import { UPDATE_TODO } from '../Store/actions';

class EditTodo extends Component {
    state = {
        newTaskName: this.props.location.state.taskName,
        newTaskContent: this.props.location.state.taskContent,
        redirect: false,
    }

    handleRedirect = () => {
        const { taskName, taskContent, completed, id } = this.props.location.state;
        if (this.state.redirect) {
            const newState = this.props.location.state;
            newState.taskName = this.state.newTaskName;
            newState.taskContent = this.state.newTaskContent;
            return <Redirect to={{
                            pathname: "/view_todo",
                            state: newState,
                        }}
                    />
        } else {
            return (
                <Fragment>
                    <h2 className="editTodo--header">Edit To-Do</h2>
                    <Card className="editTodo--card">
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon className="editTodo--addons" addonType="prepend">Title</InputGroupAddon>
                                    <Input value={this.state.newTaskName} onChange={this.handleUpdateTask('newTaskName')} placeholder={taskName} />
                                </InputGroup>
                                <hr/>
                                <InputGroup>
                                    <InputGroupAddon className="editTodo--addons" addonType="prepend">Content</InputGroupAddon>
                                    <Input className="viewTodo--textarea" type="textarea" value={this.state.newTaskContent} onChange={this.handleUpdateTask('newTaskContent')} placeholder={taskContent} />
                                </InputGroup>
                                <hr/>
                                <Button onClick={this.handleSubmitTask} color="success">Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Fragment>
            )
        }
    }

    handleUpdateTask = (fieldName) => (event) => {
        this.setState({ [fieldName]: event.target.value });
    }

    handleSubmitTask = () => {
        // call the edit action
        this.setState({ redirect: true });
    }

    render() {
        return (
            <section className="editTodo container">
                {this.handleRedirect()}
            </section>
        )
    }
}

export default connect()(EditTodo);