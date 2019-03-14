import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ViewTodo.css';
import {
    Card, 
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';

class ViewTodo extends Component {
    render() {
        return (
            <section className="viewTodo">
                <h2>View To-Do</h2>
                <Card className="viewTodo--card">
                    <CardBody>
                        <CardTitle className="viewTodo--header">To-Do Title</CardTitle>
                        <hr/>
                        <CardText className="viewTodo--content">To-Do Item Text</CardText>
                        <hr/>
                        <div className="viewTodo--buttons-container">
                            <Button color="primary" className="viewTodo--buttons">Edit</Button>
                            <Button outline color="danger" className="viewTodo--buttons">Delete</Button>
                        </div>
                    </CardBody>
                </Card>
            </section>
        )
    }
}

export default connect()(ViewTodo);