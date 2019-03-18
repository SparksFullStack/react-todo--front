// * TODO
// Add alert for errors
// Add reset password form
// Add reset password logic

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
        answerStatus: true,
        securityQuestionAnswer: "",
        email: "theatticus82@gmail.com",
        error: {
            isError: false,
            errorText: "",
        },
        password: ""
    }

    handleRenderFormType = () => {
        if (!this.state.answerStatus) {
            return (
                <Fragment>
                    <ModalHeader className="text-center" toggle={this.props.toggle}>Please answer the security questions</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label className="forgotPass--labels" for="forgotPassEmail" sm={12}>What's your email address?</Label>
                                <Col sm={12}>
                                    <Input value={this.state.email} onChange={this.handleUpdateForm('email')} type="email" name="forgotPassEmail" id="forgotPassEmail" placeholder="enter your answer..." bsSize="md" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="forgotPass--labels" for="forgotPassSecurity" sm={12}>What was your mother's maiden name?</Label>
                                <Col sm={12}>
                                    <Input value={this.state.securityQuestionAnswer} onChange={this.handleUpdateForm('securityQuestionAnswer')} type="text" name="forgotPasssecurity" id="forgotPassSecurity" placeholder="enter your answer..." bsSize="md" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="w-100" color="primary" onClick={this.handleSubmitAnswer}>Submit Answer</Button>
                    </ModalFooter>
                </Fragment>
            );
        } else return (
                <Fragment>
                    <ModalHeader className="text-center" toggle={this.props.toggle}>Please enter your new password</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label className="forgotPass--labels" for="resetPassInput" sm={12}>Please enter your new password</Label>
                                <Col sm={12}>
                                    <Input value={this.state.password} onChange={this.handleUpdateForm('password')} type="password" name="resetPassInput" id="resetPassInput" placeholder="enter your new password" bsSize="md" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="w-100" color="primary" onClick={this.handleSubmitReset}>Reset Password</Button>
                    </ModalFooter>
                </Fragment>
        )
    }

    handleUpdateForm = (formType) => event => {
        this.setState({ [formType]: event.target.value });
    }

    handleSubmitAnswer = () => {
        const { email, securityQuestionAnswer } = this.state;
        axios.post('http://localhost:3001/auth/forgot_pass', { email, securityQuestionAnswer })
            .then(res => {
                if (res.data.forgotPass) this.setState({ answerStatus: true, error: { isError: false, errorText: ""} });
                else this.setState({ error: { isError: true, errorText: "No user with those credentials was found, please register instead"}});
            })
            .catch(err => {
                console.warn(err);
                this.setState({ error: { isError: true, errorText: "There was an error with your request, please check your answers and try again"}});
            });
    }

    handleSubmitReset = () => {
        const { email, password } = this.state;
        axios.put('http://localhost:3001/auth/reset_pass', { email, password })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.warn(err);
            })
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modalState.isOpen} toggle={this.props.toggle} className="forgotPass-modal">
                    <Alert isOpen={this.state.error.isError} color="danger">
                        {this.state.error.errorText}
                    </Alert>

                    {this.handleRenderFormType()}
                </Modal>
            </div>
        )
    }
}

export default ForgotPass;