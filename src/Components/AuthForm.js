// * TODO
// Add form validation
// Implement forgot password
// Dispatch actions with login/register
// Add alerts for incorrect email/password

// * OPTIONAL 
// Add specific password criteria
// Add double password with error checking
// Figure out uncontrolled component issue

import React, { Component, Fragment } from 'react';
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

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alertState: {
                visible: true,
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
            }
        }
    }

    handleAlert = (alertType) => {
        const newState = Object.assign({}, this.state.alertState);
        newState.visible = !this.state.alertState.visible;
        this.setState({ alertState: newState });
    }

    handleValidation = (formType) => {
        // console.log(this.state[formType]);
        // const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state[formType].email);
        // console.log(email);
    }

    handleUpdateFormState = (formType) => (event) => {
        const { name, value } = event.target;
        const newState = Object.assign({}, this.state[formType]);
        newState[name] = value;
        this.setState({[formType]: newState});
        console.log(this.state[formType][name])
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
                                        <Input onChange={this.handleUpdateFormState('signinFormState', 'password')} value={this.state.signinFormState.password} type="password" name="signinPassword" id="signin-pass" placeholder="enter your password..." bsSize="md" />
                                    </Col>
                                    
                                </FormGroup>
                            </Form>
                            <Button type="button" onClick={() => this.handleValidation('signinFormState')} color="primary" className="authForm--button">Sign In</Button>
                            <br />
                            <a className="" href="#">Forgot password?</a>
                        </CardBody>
                        </Card>
                        <p className="authForm--change-type">Don't have an account? <span onClick={this.props.handleChangeFormType}>Register here!</span></p>
                    </div>
                    :
                    <div>
                        <Card className="authForm">
                        <CardBody>
                            <CardTitle>Register</CardTitle>
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
                                        <Input onChange={this.handleUpdateFormState('registerFormState', 'password')} value={this.state.registerFormState.password} type="password" name="regPassword" id="register-pass" placeholder="enter your password..." bsSize="md" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label className="authForm--labels" for="register-security" sm={12}>What was your mother's maiden name?</Label>
                                    <Col sm={12}>
                                        <Input onChange={this.handleUpdateFormState('registerFormState', 'securityQuestion')} value={this.state.registerFormState.securityQuestion} type="text" name="regSecurity" id="register-security" placeholder="answer security question..." bsSize="md" />
                                    </Col>
                                </FormGroup>
                            </Form>
                            <Button color="primary" className="authForm--button">Register</Button>
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