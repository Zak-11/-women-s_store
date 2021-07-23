import React from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";


const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE


    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Log in' : "Create an account"}</h2>
                <Form className="d-flex flex-column">

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>



                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mt-3"
                        label="Remember me"
                    />

                    <Row className="d-flex justify-content-between mt-5 p-lg-1 ">

                        <Button
                            variant="outline-warning"
                        >
                            {isLogin ? 'Log in' : 'Create an account'}
                        </Button>


                        {isLogin ?
                            <div className={ "mt-5 "}
                             >
                                You don't have an account? <NavLink to={REGISTRATION_ROUTE}>Create an account!</NavLink>
                            </div>
                            :
                            <div className={  "mt-5"}

                            >
                                Have an account. <NavLink to={LOGIN_ROUTE}>Log in!</NavLink>
                            </div>
                        }


                    </Row>

                </Form>

            </Card>
        </Container>
    );
};

export default Auth;
