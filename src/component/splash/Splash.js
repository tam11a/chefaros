import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import {MdSearch} from 'react-icons/md';

import './Splash.css';

export default function Splash() {
    return (
        <div className="splash flex-col container">
            <div className="flex-col f1" style={{marginTop: "50%"}}>
                <img src={logo} className="App-logo" alt="logo" />
                <h3>Chefaros</h3>
            </div>
            
            <Link to="/dashboard" className="primary-btn flex-inline">
                <MdSearch/>
                <span className="f1" style={{
                    padding: "3px 10px"
                }}>Search Recipe</span>
            </Link>
            <p className="from-line">From Tam11a</p>
        </div>
    )
}
