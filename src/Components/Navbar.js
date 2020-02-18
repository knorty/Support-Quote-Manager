import React from "react";
import { Link, withRouter } from 'react-router-dom';
import "../css/Navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div><Link to="/" className="company-logo">ProEx</Link></div>
                <div className="nav-menu">
                    <div className="nav-item-container"><Link to="/entry" className="nav-menu-item">Add Entry</Link></div>
                    <div className="nav-item-container"><Link to="/search" className="nav-menu-item">Search</Link></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);