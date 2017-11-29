import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component
{
    render() {
        return (
            <div className="App">
                <header>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <span className="App-logo">
                            <img src={logo} className="App-logo" alt="logo"/><span className="App-title">React Application</span></span>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Page 1</a></li>
                                <li><a href="#">Page 2</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </nav>


                </header>
            </div>
        );
    }
}
export default Header;
