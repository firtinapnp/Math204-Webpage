import React, {Component} from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import Exam from "../components/Exam";
import {fetchExams,openCollapsible,closeCollapsible} from "../actions";
import M from 'materialize-css/dist/js/materialize.min.js';


class Exams extends Component {
    componentWillMount(){
        if(!this.props.exams && !this.props.oldexams){
            this.props.fetchExams();
        }
    }
    componentDidMount(){

        M.Collapsible.init(this.collapsible, {
            onOpenEnd:(el)=>this.props.openCollapsible(el.id,el.type),
            onCloseStart:(el)=>this.props.closeCollapsible(el.id,el.type)
        });
        M.Collapsible.init(this.collapsible2, {
            onOpenEnd:(el)=>this.props.openCollapsible(el.id,el.type),
            onCloseStart:(el)=>this.props.closeCollapsible(el.id,el.type)
        });
    }

    createExam(exam,index,type){
        if(this.props.exams && type==="exam"){
            return <Exam type="exam" id={index} key={index} isActive={exam.title===this.props.activeExam} title={exam.title} solutions={exam.solutions}/>;
        }
        if(this.props.oldexams &&  type==="oldexam"){
            return <Exam type="oldexam" id={index} key={index} isActive={exam.title===this.props.activeOldExam} title={exam.title} solutions={exam.solutions}/>;
        }
        return <Exam/>;
    }
    render() {
        return (
            <div>
                {
                    (this.props.oldexams && this.props.oldexams[0]) && <h2 className="center-align">Old Exams (2018 Spring)</h2>
                }
                <div className="container">
                    <ul id="oldexams" className="collapsible popout" ref={ (collapsible) => {this.collapsible2 = collapsible} } data-collapsible="accordion">
                        {this.props.oldexams && this.props.oldexams.map((exam,index) => this.createExam(exam,index,"oldexam"))}
                    </ul>
                </div>
                {
                    (this.props.exams && this.props.exams[0]) && <h2 className="center-align">Exams </h2>
                }
                <div className="container">
                    <ul id="exams" className="collapsible popout" ref={ (collapsible) => {this.collapsible = collapsible} } data-collapsible="accordion">
                        {this.props.exams && this.props.exams.map((exam,index) => this.createExam(exam,index,"exam"))}
                    </ul>
                </div>
            </div>
        )

    }
}

function mapStateToProps(state){
    console.log(state)
    let exams = state.exams.exams;
    let oldexams = state.exams.old_exams;
    let collapsible = state.collapsible;
    let activeExam="";
    let activeOldExam="";
    if(collapsible.done){
        activeExam=collapsible.activeExam;
        activeOldExam=collapsible.activeOldExam;
    }else{
        activeExam = exams && exams[0] ? exams[0].title : ""
        activeOldExam = oldexams && oldexams[0] ? oldexams[0].title : ""
    }
    return{
        exams,
        oldexams,
        activeExam,
        activeOldExam
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchExams,openCollapsible,closeCollapsible},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Exams);
