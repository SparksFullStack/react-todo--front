// * TODO
// Add form validation
// Implement forgot password
// Dispatch actions with login/register and redirect
// Add alerts for incorrect email/password

// * OPTIONAL 
// Add specific password criteria
// Add double password with error checking

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
} from 'reactstrap';

import ForgotPass from './ForgotPass';

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alertState: {
                visible: false,
                text: 'Default alert text'
            },
            signinFormState: {
                signinEmail: "",
                signinPassword: "",
            },
            registerFormState: {
                regEmail: "",
                regPassword: "",
                regSecurity: ""
            },
            modalState: {
                isOpen: false,
            },
            successAlert: {
                visible: false,
                text: "Default alert text"
            }
        }
    }

    handleAlert = (alertText, visibleState) => {
        this.setState({
            alertState: {
                visible: visibleState,
                text: alertText
            }
        });
    }

    handleSuccessAlert = (alertText, visibleState) => {
        console.log(alertText);
        this.setState({
            successAlert: {
                visible: visibleState,
                text: alertText
            }
        })
    }

    handleValidation = (formType) => {
        if (formType === 'signin') {
            const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.signinFormState.signinEmail);
            const password = this.state.signinFormState.signinPassword;

            if (!email) this.handleAlert('Please enter a valid email address', true);
            if (email) this.handleAlert('', false);
            if (password === "") this.handleAlert('Please enter your password', true);
            if (password !== "") this.handleAlert('', false);

            if (!this.state.alertState.visible){
                this.handleSignIn(this.state.signinFormState.signinEmail, password);
            }
        } else if (formType === 'register') {
            const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.registerFormState.regEmail);
            const password = this.state.registerFormState.regPassword;
            const securityQuestion = this.state.registerFormState.regSecurity;

            if (!email) this.handleAlert('Please enter a valid email address', true);
            if (email) this.handleAlert('', false);
            if (password === "") this.handleAlert('Please enter your password', true);
            if (password !== "") this.handleAlert('', false);
            if (securityQuestion === "") this.handleAlert('Please enter your security question', true);
            if (securityQuestion !== "") this.handleAlert('', false);

            if (!this.state.alertState.visible){
                this.handleSubmitRegistration(this.state.registerFormState.regEmail, password, securityQuestion);
            }
        }
    }

    handleUpdateFormState = (formType) => (event) => {
        const { name, value } = event.target;
        const newState = Object.assign({}, this.state[formType]);
        newState[name] = value;
        this.setState({[formType]: newState});
    }

    handleSubmitRegistration = (email, password, securityQuestionAnswer) => {
        console.log('test');
        axios.post('http://localhost:3001/auth/register', { email, password, securityQuestionAnswer })
            .then(res => {
                localStorage.setItem('JWT', res.data.JWT);
                this.props.handleRedirect();
            })
            .catch(err => console.log(err));
    }

    handleSignIn = (email, password) => {
        axios.post('http://localhost:3001/auth/login', { email, password })
            .then(res => {
                localStorage.setItem('JWT', res.data.JWT);
                this.props.handleRedirect();
            })
            .catch(err => {
                console.warn(err);
            })
    } 

    toggleModal = () => {
        this.setState({ modalState: { isOpen: !this.state.modalState.isOpen }});
    }

    render() {
        return (
            <Fragment>
                { this.props.signin ? 
                    <div>
                        <Card className="authForm">
                            <CardBody>
                                <CardTitle>Sign In</CardTitle>
                                <Alert color="danger" isOpen={this.state.alertState.visible} toggle={this.handleAlert}>
                                    {this.state.alertState.text}
                                </Alert>
                                <Alert color="success" isOpen={this.state.successAlert.visible} toggle={this.handleSuccessAlert}>
                                    {this.state.successAlert.text}
                                </Alert>
                                <hr />
                                <Form>
                                    <FormGroup row>
                                        <Label className="authForm--labels" for="signin-email" sm={12}>Email</Label>
                                        <Col sm={12}>
                                            <Input onChange={this.handleUpdateFormState('signinFormState')} value={this.state.signinFormState.email} type="email" name="signinEmail" id="signin-email" placeholder="enter your email..." bsSize="md" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label className="authForm--labels" for="signin-pass" sm={12}>Password</Label>
                                        <Col sm={12}>
                                            <Input onChange={this.handleUpdateFormState('signinFormState')} value={this.state.signinFormState.password} type="password" name="signinPassword" id="signin-pass" placeholder="enter your password..." bsSize="md" />
                                        </Col>
                                        
                                    </FormGroup>
                                </Form>
                                <Button onClick={() => this.handleValidation('signin')} color="primary" className="authForm--button">Sign In</Button>
                                <br />
                                <a className="authForm--forgot-pass" onClick={this.toggleModal} href="#">Forgot password?</a>
                                <ForgotPass toggle={this.toggleModal} modalState={this.state.modalState} handleSuccessAlert={this.handleSuccessAlert} />
                            </CardBody>
                        </Card>
                        
                        <p className="authForm--change-type">Don't have an account? <span onClick={this.props.handleChangeFormType}>Register here!</span></p>
                    </div>
                    :
                    <div>
                        <Card className="authForm">
                            <CardBody>
                                <CardTitle>Register</CardTitle>
                                <Alert color="danger" isOpen={this.state.alertState.visible} toggle={this.handleAlert}>
                                    {this.state.alertState.text}
                                </Alert>
                                <hr />
                                <Form>
                                    <FormGroup row>
                                        <Label className="authForm--labels" for="register-email" sm={12}>Email</Label>
                                        <Col sm={12}>
                                            <Input onChange={this.handleUpdateFormState('registerFormState')} value={this.state.registerFormState.email} type="email" name="regEmail" id="register-email" placeholder="enter your email..." bsSize="md" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label className="authForm--labels" for="register-pass" sm={12}>Password</Label>
                                        <Col sm={12}>
                                            <Input onChange={this.handleUpdateFormState('registerFormState')} value={this.state.registerFormState.password} type="password" name="regPassword" id="register-pass" placeholder="enter your password..." bsSize="md" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label className="authForm--labels" for="register-security" sm={12}>What was your mother's maiden name?</Label>
                                        <Col sm={12}>
                                            <Input onChange={this.handleUpdateFormState('registerFormState')} value={this.state.registerFormState.securityQuestion} type="text" name="regSecurity" id="register-security" placeholder="answer security question..." bsSize="md" />
                                        </Col>
                                    </FormGroup>
                                </Form>
                                <Button onClick={() => this.handleValidation('register')} color="primary" className="authForm--button">Register</Button>
                            </CardBody>
                        </Card>

                        <p className="authForm--change-type">Already have an account? <span onClick={this.props.handleChangeFormType}>Sign-in here!</span></p>
                    </div>
                }                
            </Fragment>    
        )
    }
}

export default AuthForm;