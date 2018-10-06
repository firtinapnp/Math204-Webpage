import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/ku-logo-1.png";
import M from 'materialize-css/dist/js/materialize.min.js';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={ dropInstance:null};
    }
    componentDidMount(){
        M.Dropdown.init(this.dropdown, {
            alignment:"right",
            constrainWidth:false,
            coverTrigger:false
        });
        var instance=M.Dropdown.getInstance(this.dropdown);
        this.setState(()=>({
            dropInstance: instance
        }));
        window.addEventListener("resize", this.handleResize.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize.bind(this));
    }
    handleResize(){
        if(this.state.dropInstance.isOpen){
            this.state.dropInstance.close();
        }
    }
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper blue-grey darken-3">
                            <div className="brand-logo left" style={{marginLeft:"1em"}}><span><img src={logo} alt="Math204" style={{height:"4rem", marginTop:"0.5rem"}}/></span></div>
                            <a href="#" data-target="mobile-demo" ref={ (dropdown) => {this.dropdown = dropdown} } className="hide-on-large-only dropdown-trigger right"><i className="material-icons">menu</i></a>
                            <ul id="navbar-pc" className="right hide-on-med-and-down" style={{marginRight:"1.2em"}}>
                                <li><NavLink exact activeStyle={{backgroundColor:"#5294e2"}} to={`${process.env.PUBLIC_URL}/`}>Home</NavLink></li>
                                <li><NavLink activeStyle={{backgroundColor:"#5294e2"}} to={`${process.env.PUBLIC_URL}/announcements`}>Announcements</NavLink></li>
                                <li><NavLink activeStyle={{backgroundColor:"#5294e2"}} to={`${process.env.PUBLIC_URL}/syllabus`}>Syllabus</NavLink></li>
                                <li><NavLink activeStyle={{backgroundColor:"#5294e2"}} to={`${process.env.PUBLIC_URL}/info`}>Info &amp; Office Hours</NavLink></li>
                                <li><NavLink activeStyle={{backgroundColor:"#5294e2"}} to={`${process.env.PUBLIC_URL}/homeworks`}>Homeworks</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="dropdown-content hide-on-large-only blue-grey darken-3" id="mobile-demo">
                    <li><NavLink activeStyle={{backgroundColor:"#5294e2"}} exact to={`${process.env.PUBLIC_URL}/`} className="white-text">Home</NavLink></li>
                    <li><NavLink activeStyle={{backgroundColor:"#5294e2"}} to={`${process.env.PUBLIC_URL}/announcements`} className="white-text">Announcements</NavLink></li>
                    <li><NavLink activeStyle={{backgroundColor:"#5294e2"}}to={`${process.env.PUBLIC_URL}/syllabus`} className="white-text">Syllabus</NavLink></li>
                    <li><NavLink activeStyle={{backgroundColor:"#5294e2"}} to={`${process.env.PUBLIC_URL}/info`} className="white-text">Info &amp; Office Hours</NavLink></li>
                    <li><NavLink activeStyle={{backgroundColor:"#5294e2"}} to={`${process.env.PUBLIC_URL}/homeworks`} className="white-text">Homeworks</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
