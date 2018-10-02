import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/ku-logo-1.png";
import M from 'materialize-css/dist/js/materialize.min.js';

class Navbar extends Component {
    constructor(props){
        super(props);
        var instances = M.Dropdown.init();
    }
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper blue-grey darken-3">
                            <a href="#!" className="brand-logo left" style={{marginLeft:"1em"}}><span><img src={logo} alt="Math204" style={{height:"4rem", marginTop:"0.5rem"}}/></span></a>
                            <a href="#" data-activates="mobile-demo" className="button-collapse right"><i className="material-icons">menu</i></a>
                            <ul id="navbar-pc" className="right hide-on-med-and-down" style={{marginRight:"1.2em"}}>
                                <li id="home-pc"><NavLink exact activeClassName="active light-blue darken-1" to="/~math204/">Home</NavLink></li>
                                <li><NavLink activeClassName="active light-blue darken-1" to="/~math204/announce">Announcements</NavLink></li>
                                <li><NavLink activeClassName="active light-blue darken-1" to="/~math204/syllabus">Syllabus</NavLink></li>
                                <li><NavLink activeClassName="active light-blue darken-1" to="/~math204/info">Info &amp; Office Hours</NavLink></li>
                                <li><NavLink activeClassName="active light-blue darken-1" to="/~math204/homeworks">Homeworks</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="dropdown-content blue-grey darken-3" id="mobile-demo">
                    <li id="home-mob" ><NavLink exact activeClassName="active light-blue darken-1" to="/~math204/" className="white-text">Home</NavLink></li>
                    <li><NavLink activeClassName="active light-blue darken-1" to="/~math204/announce" className="white-text">Announcements</NavLink></li>
                    <li><NavLink activeClassName="active light-blue darken-1" to="/~math204/syllabus" className="white-text">Syllabus</NavLink></li>
                    <li><NavLink activeClassName="active light-blue darken-1" to="/~math204/info" className="white-text">Info &amp; Office Hours</NavLink></li>
                    <li><NavLink activeClassName="active light-blue darken-1" to="/~math204/homeworks" className="white-text">Homeworks</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
