import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js';
import Layout from './components/Layout.js'

class App extends Component {
    render() {
        return (
           <Layout/>
        );
    }
}

export default App;
