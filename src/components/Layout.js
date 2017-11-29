/**
 * Created by khanmu on 11/29/2017.
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}
export default Layout;
