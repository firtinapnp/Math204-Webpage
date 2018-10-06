import React, { Component } from 'react';
import './styles/app.scss';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import Exams from "./containers/Exams";
import Homeworks from "./containers/Homeworks";
import Info from "./containers/Info";
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
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/exams`} component={Exams}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/homeworks`} component={Homeworks}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/info`} component={Info}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/syllabus`} component={Syllabus}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/announcements`} component={Announcements}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
