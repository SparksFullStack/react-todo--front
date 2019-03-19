// * OPTIONAL
// Add signout to the header instead of below the list

import React, { Component, Fragment } from 'react'
import jsonwebtoken from 'jsonwebtoken';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            signoutVisible: false,
            redirect: false,
        }
    }

    componentDidMount() {
        this.checkJWT();
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    checkJWT = () => {
        let JWT = localStorage.getItem('JWT');
        let jwtStatus = jsonwebtoken.verify(JWT, process.env.REACT_APP_JWT_SECRET, (err, decoded) => {
           if (decoded) this.setState({ signoutVisible: true });
        })
    }

    handleSignout = () => {
        localStorage.removeItem('JWT');
        this.setState({ signoutVisible: false });
    }

    render() {
        return (
        <header className="header" id="header">
            <Navbar color="light" light expand="md">
                <Link className='navbar-brand' to="/">To-Do List</Link>

                {/* { this.state.signoutVisible ? 
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/" onClick={this.handleSignOut}>Sign Out</NavLink>
                        </NavItem>
                    </Nav>
                    :
                    <Fragment></Fragment>
                } */}
            </Navbar>
        </header>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Header);
