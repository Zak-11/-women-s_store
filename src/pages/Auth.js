import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>

            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'LOG IN' : "Create an account"}</h2>
                <Form className="d-flex flex-column">

                    <Form.Group
                        className="mb-3"
                        controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>

                        <Form.Control type="email"
                                      placeholder="Enter email"
                                      value={email}
                                      onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Password"
                                      value={password}
                                      onChange={e => setPassword(e.target.value)}

                        />
                    </Form.Group>


                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mt-3"
                        label="Remember me"
                    />

                    <Row className="d-flex justify-content-between mt-5 p-lg-1 ">

                        <Button
                            variant="secondary"
                            onClick={click}
                        >
                            {isLogin ? 'LOG IN' : 'Create an account'}
                        </Button>


                        {isLogin ?
                            <div className={"mt-5 "}
                            >
                                You don't have an account? <NavLink to={REGISTRATION_ROUTE}>CREATE ACCOUNT!</NavLink>
                            </div>
                            :
                            <div className={"mt-5"}

                            >
                                Have an account. <NavLink to={LOGIN_ROUTE}>LOG IN!</NavLink>
                            </div>
                        }
                    </Row>

                </Form>

            </Card>
        </Container>
    );
});

export default Auth;
