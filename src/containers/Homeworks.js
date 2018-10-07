import React, {Component} from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import HomeWork from "../components/HomeWork";
import {fetchHomeworks,openCollapsible,closeCollapsible} from "../actions";
import M from 'materialize-css/dist/js/materialize.min.js';


class Homeworks extends Component {
    componentWillMount(){
        if(!this.props.homeworks){
            this.props.fetchHomeworks();
        }
    }
    componentDidMount(){
        M.Collapsible.init(this.collapsible, {
            onOpenEnd:(el)=>this.props.openCollapsible(el.id),
            onCloseStart:(el)=>this.props.closeCollapsible(el.id)
        });
        let instance = M.Collapsible.getInstance(this.collapsible);
        instance.close(1);
    }

    createHomework(hw,index){
        if(this.props.homeworks){
            return <HomeWork id={index} key={index} isActive={hw.title===this.props.activeHW} title={hw.title} table={hw.table}/>;
        }
        return <HomeWork/>;
    }
    render() {
        return (
            <div>
                <h2 className="center-align">Suggested Problems for PS</h2>
        		<div className="container">
        			<ul id="homeworks" className="collapsible popout" ref={ (collapsible) => {this.collapsible = collapsible} } data-collapsible="accordion">
                        {this.props.homeworks && this.props.homeworks.map((hw,index) => this.createHomework(hw,index)).reverse()}

        			</ul>
        		</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    let homeworks = state.homeworks.homeworks;
    let collapsible = state.collapsible;
    let activeHW="";
    if(collapsible.done){
        activeHW=collapsible.activeHW;
    }else{
        activeHW = homeworks ? homeworks[homeworks.length-1].title : ""
    }
    return{
        homeworks,
        activeHW
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchHomeworks,openCollapsible,closeCollapsible},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Homeworks);
