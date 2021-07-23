import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";

const NavBar = () => {

    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>EASY TO BUY</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} className="mx-lg-4">Admin panel</Button>

                        <Button variant={"outline-light"}> Go out</Button>

                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
}

export default NavBar;
