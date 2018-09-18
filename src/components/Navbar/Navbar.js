import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {

    state = {
        navOpen: false
    };

    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({
            navOpen: true
        });
    }

    close() {
        this.setState({
            navOpen: false
        });
    }

    render() {
        return (
            <div className={['navbar', this.state.navOpen ? 'navbar-open' : ''].join(' ')}>
                <a className='navbar-logo' href='/'><img src={logo} alt="logo" /></a>
                <nav>
                    <ul className='navlinks'>
                        <li><div className={['nav-toggle', this.state.navOpen ? 'hide-nav-toggle' : 'show-nav-toggle'].join(' ')}>
                            <span onClick={this.open}><FontAwesomeIcon icon={['fas', 'bars']} /></span>
                        </div></li>
                        <li><div className={['nav-toggle', this.state.navOpen ? 'show-nav-toggle' : 'hide-nav-toggle'].join(' ')}>
                            <span onClick={this.close}><FontAwesomeIcon icon={['fas', 'times']} /></span>
                        </div></li>
                        <li><NavLink onClick={this.close} className='navlink' to='/'><div>Home</div></NavLink></li>
                        <li><NavLink onClick={this.close} className='navlink' to='/about'><div>About</div></NavLink></li>
                        <li><NavLink onClick={this.close} className='navlink' to='/games'><div>Games</div></NavLink></li>
                        <li><NavLink onClick={this.close} className='navlink' to='/contact'><div>Contact</div></NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;