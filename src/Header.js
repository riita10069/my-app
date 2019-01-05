import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


export default class Header extends Component {
    render(){
        return(
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="https://riita10069.github.io/riita10069.github.io/top_page.html">TokyoTech</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="https://riita10069.github.io/riita10069.github.io/campuslife/CampusLife.html">
                            CampusLife
                        </NavItem>
                        <NavItem eventKey={2} href="https://riita10069.github.io/riita10069.github.io/preparation/preparation.html">
                            Preparation for Entrance Exam
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            Experience Note
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            About Us
                        </NavItem>
                        <NavItem eventKey={5} href="#">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}