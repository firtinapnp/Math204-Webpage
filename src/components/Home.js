import React, {Component} from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import logo from "../images/ku-logo.png";
import wallpaper from "../images/wallpaper.jpg";

class Home extends Component {
    componentDidMount(){
        M.Parallax.init(this.parallax);
    }
    render() {
        return (
            <div className="parallax-container">
                <h1 id="koc-uni" className="center-align  grey-text text-lighten-1"><img id="ku-logo" src={logo}/>Ko&#231; University</h1>
                <h4 className="center-align grey-text">Department of Mathematics</h4>
                <div ref={ (parallax) => {this.parallax = parallax} }  className="parallax">
                    <img src={wallpaper} alt="wallpaper"/>
                </div>
                <ul className="fade-in">
                    <li>
                        <h1 className="center-align white-text">MATH 204: Differential Equations</h1>
                    </li>
                    <li>
                        <h2 className="center-align blue-grey-text text-lighten-3">Fall 2018</h2>
                    </li>
                </ul>


            </div>
        );
    }
}

export default Home;
