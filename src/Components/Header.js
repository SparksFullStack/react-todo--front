import React, { Component } from 'react'
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
        }
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
        <header className="header" id="header">
            <Navbar color="light" light expand="md">
                <Link className='navbar-brand' to="/">To-Do List</Link>
            </Navbar>
        </header>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Header);
