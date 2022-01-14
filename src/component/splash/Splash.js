import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import {MdDoubleArrow} from 'react-icons/md';

import './Splash.css';

export default function Splash() {
    return (
        <div className="splash flex-col-center container">
            <div className="flex-col-center f1" style={{marginTop: "-15%"}}>
                <img src={logo} className="App-logo" alt="logo" />
                <h3>Chefaros</h3>
            </div>
            
            <Link to="/dashboard" className="primary-btn flex-inline">
                <span className="f1" style={{
                    padding: "3px 10px"
                }}>Get Started</span>
                <MdDoubleArrow />
            </Link>
            {/* <p className="from-line">From Tam11a</p> */}
        </div>
    )
}
