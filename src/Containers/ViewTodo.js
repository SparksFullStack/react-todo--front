import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ViewTodo.css';
import {
    Card, 
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';
import { DELETE_TODO } from '../Store/actions';

class ViewTodo extends Component {
    state = {
        redirect: false,
    }

    handleRedirect = () => {
        const { taskName, taskContent, completed, id } = this.props.location.state;

        if (!this.props.location.state || this.state.redirect === true) {
            return <Redirect to="/" />
        } else {
            return (
                <Fragment>
                    <h2 className="viewTodo--header">View To-Do</h2>
                    <Card className="viewTodo--card">
                        <CardBody>
                            <CardTitle className="viewTodo--card-title">{taskName}</CardTitle>
                            <hr/>
                            <CardText className="viewTodo--content">{taskContent}</CardText>
                            <hr/>
                            <div className="viewTodo--buttons-container">
                                <Button color="primary" className="viewTodo--buttons">Edit</Button>
                                <Button onClick={this.handleDeleteTodo} outline color="danger" className="viewTodo--buttons">Delete</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Fragment>
            )
        }
    }

    handleDeleteTodo = () => {
        this.setState({ redirect: true });
    }

    render() {
        return (
            <section className="viewTodo container">
            {this.handleRedirect()}
            </section>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         todoItem: 
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch({ type: DELETE_TODO, payload: id }),
    }
}

export default connect()(ViewTodo);