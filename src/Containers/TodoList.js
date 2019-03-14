// * TODO
// Make todo items hyperlinks

// * Optional
// Add icons to todo items

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './TodoList.css';

import {
    Card, 
    CardBody,
    CardTitle,
    Button,
    ListGroup,
    ListGroupItem,
    Row
} from 'reactstrap';

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <section className="todoList">
                <Card className="todoList--card">
                    <CardBody>
                        <CardTitle>My To-Do's</CardTitle>
                        <hr />
                        <ListGroup>
                            <ListGroupItem className="todoList--items">
                                <p>Todo number 1</p>
                                <div className="todoList--items--button-container">
                                    <Button outline className="todoList--items--buttons" color="success">Complete</Button>
                                    <Button outline className="todoList--items--buttons" color="primary">View</Button>
                                </div>
                            </ListGroupItem>
                            <ListGroupItem className="todoList--items">Todo number 2</ListGroupItem>
                            <ListGroupItem className="todoList--items">Todo number 3</ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
            </section>
        )
    }
}

export default connect()(TodoList);