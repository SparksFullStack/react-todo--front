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
    state = {
        answerStatus: false
    }


    handleRenderFormType = () => {
        if (!this.state.answerStatus) {
            return (
                <Fragment>
                    <ModalHeader className="text-center" toggle={this.props.toggle}>Please answer the security question</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label className="forgotPass--labels" for="forgotPass--security" sm={12}>What was your mother's maiden name?</Label>
                                <Col sm={12}>
                                    <Input  type="email" name="signinEmail" id="signin-email" placeholder="enter your answer..." bsSize="md" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="w-100" color="primary" onClick={this.props.toggle}>Submit Answer</Button>
                    </ModalFooter>
                </Fragment>
            );
        } else return <h1>idk bro</h1>
    }


    render() {
        return (
            <div>
                <Modal isOpen={this.props.modalState.isOpen} toggle={this.props.toggle} className="forgotPass-modal">
                    {this.handleRenderFormType()}
                </Modal>
            </div>
        )
    }
}

export default ForgotPass;