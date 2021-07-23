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
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">


                    <Form.Control

                        className={"mt-5"}
                        placeholder={"Enter your email ..."}
                    />

                    <Form.Control
                        className={"mt-5"}
                        placeholder={"Enter your password ..."}/>


                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mt-4"
                        label="Remember me"
                    />

                    <Row className="d-flex justify-content-between mt-5 p-lg-1 ">

                        <Button
                            variant="outline-warning"
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>


                        {isLogin ?
                            <div className={ "mt-5 "}
                             >
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div className={  "mt-5"}

                            >
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }


                    </Row>

                </Form>

            </Card>
        </Container>
    );
};

export default Auth;
