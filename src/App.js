import React, { Component } from 'react';
import './styles/app.scss';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import Exams from "./components/Exams";
import Homeworks from "./components/Homeworks";
import Info from "./components/Info";
import Syllabus from "./components/Syllabus";
import Announcements from "./components/Announcements";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <Navbar/>
                    </header>
                    <Switch>
                        <Route exact path="/~math204" component={Home}/>
                        <Route exact path="/~math204/exams" component={Exams}/>
                        <Route exact path="/~math204/homeworks" component={Homeworks}/>
                        <Route exact path="/~math204/info" component={Info}/>
                        <Route exact path="/~math204/syllabus" component={Syllabus}/>
                        <Route exact path="/~math204/announcements" component={Announcements}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
