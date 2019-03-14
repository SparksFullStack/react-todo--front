import React from 'react';
import "./AuthForm.css";
import { Col, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const AuthForm = props => {
    return (
        <Card className="authForm">
            <CardBody>
                <CardTitle>Sign In</CardTitle>
                <hr></hr>
                <Form>
                    <FormGroup row>
                        <Label className="authForm--labels" for="signin-email" sm={12}>Email</Label>
                        <Col sm={12}>
                            <Input type="email" name="signin-email" id="signin-email" placeholder="Enter your email..." bsSize="md" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label className="authForm--labels" for="signin-pass" sm={12}>Password</Label>
                        <Col sm={12}>
                            <Input type="password" name="signin-password" id="signin-pass" placeholder="enter your password..." bsSize="md" />
                        </Col>
                        <a href="#">Forgot password?</a>
                    </FormGroup>
                </Form>
                <div className="authForm--buttons-container">
                    <Button className="authForm--buttons">Sign In</Button>
                    <Button className="authForm--buttons">Register</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default AuthForm;