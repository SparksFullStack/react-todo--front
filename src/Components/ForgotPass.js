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
        answerStatus: false,
        securityQuestionAnswer: "",
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
                                    <Input value={this.state.securityQuestionAnswer} onChange={this.handleUpdateForm('securityQuestionAnswer')} type="email" name="forgotPassEmail" id="forgotPassEmail" placeholder="enter your answer..." bsSize="md" />
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
                        <Button className="w-100" color="primary" onClick={this.props.toggle}>Submit Answer</Button>
                    </ModalFooter>
                </Fragment>
            );
        } else return <h1>idk bro</h1>
    }

    handleUpdateForm = (formType) => event => {
        this.setState({ [formType]: event.target.value });
        console.log(this.state[formType]);
    }

    handleSubmitAnswer = () => {
        axios.post('http://localhost:3001/auth/forgot_pass', {})
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