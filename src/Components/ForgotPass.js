import React, { Component, Fragment } from 'react';
import axios from 'axios';
import "./AuthForm.css";
import { 
    Col, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Card, 
    CardBody,
    CardTitle,
    Button,
    Alert,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

class ForgotPass extends Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.modalState.isOpen} toggle={this.props.toggle} className="forgotPass-modal">
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ForgotPass;