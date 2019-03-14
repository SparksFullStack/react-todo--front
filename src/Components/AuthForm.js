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
                        
                    </FormGroup>
                </Form>
                <Button color="primary" className="authForm--button">Sign In</Button>
                <br />
                <a className="" href="#">Forgot password?</a>
            </CardBody>
        </Card>
    )
}

export default AuthForm;