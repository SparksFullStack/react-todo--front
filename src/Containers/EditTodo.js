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
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';
import { UPDATE_TODO } from '../Store/actions';
import { dispatch } from 'rxjs/internal/observable/range';

class EditTodo extends Component {
    state = {
        newTaskName: "",
        newTaskContent: "",
        redirect: false,
    }

    componentDidMount() {
        if ( this.props.location.state ) {
            const { taskName, taskContent, completed, id } = this.props.location.state;
            this.setState({ newTaskName: taskName, newTaskContent: taskContent });
        }
    }

    handleRedirect = () => {
        if (!this.props.location.state || !this.props.isLoggedIn) {
            return <Redirect to={{
                            pathname: "/",
                        }}
                    />
        } else if (this.state.redirect) {
            const newState = this.props.location.state;
            newState.taskName = this.state.newTaskName;
            newState.taskContent = this.state.newTaskContent;
            return <Redirect to={{
                            pathname: "/view_todo",
                            state: newState,
                        }}
                    /> 
        
        } else {
            const { taskName, taskContent, completed, id } = this.props.location.state;
            return (
                <Fragment>
                    <h2 className="editTodo--header">Edit To-Do</h2>
                    <Breadcrumb className="editTodo--breadcrumbs">
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Edit To-Do</BreadcrumbItem>
                    </Breadcrumb>
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
                                <Button className="editTodo--button" onClick={this.handleSubmitTask} color="success">Submit</Button>
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
        const newState = this.props.location.state;
        newState.taskName = this.state.newTaskName;
        newState.taskContent = this.state.newTaskContent;

        this.setState({ redirect: true });
        this.props.updateTodo(newState); 
    }

    render() {
        return (
            <section className="editTodo container">
                {this.handleRedirect()}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodo: (task) => dispatch({ type: UPDATE_TODO, payload: task }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);