import React, {Component} from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import InfoCard from "../components/InfoCard";
import {fetchInfo} from "../actions";

class Info extends Component {
    componentWillMount(){
        if(!this.props.info){
            this.props.fetchInfo();
        }
    }
    createInfoCard(info){
        if(this.props.info){
            if(info.type==="instructor"){
                return <InfoCard office={info.office} isInstructor lectures={info.lectures} officeHours={info.officeHours} title={info.title} email={info.email}/>
            }
            return <InfoCard office={info.office} officeHours={info.officeHours} title={info.title} email={info.email}/>
        }
        return <InfoCard/>;
    }
    filterInfos(isInstructor){
        return this.props.info ? this.props.info.filter((infoEl)=> isInstructor ? infoEl.type==="instructor" : infoEl.type==="assistant") : [];
    }
    renderInfos(isInstructor){
        var elements=this.filterInfos(isInstructor);
        if(elements.length %2===0){
            let items = elements.map((element)=>(
                <div key={element.title} className="col s12 m10 offset-m1 l6 ">
                    {this.createInfoCard(element)}
                </div>
            ));
            return items;
        }else{
            let itemcounter=0;
            let items = elements.map((element)=>{
                    itemcounter++;
                    if(itemcounter!==elements.length){
                        return(
                        <div key={element.title} className="col s12 m10 offset-m1 l6">
                            {this.createInfoCard(element)}
                        </div>);
                    }
                    return(
                    <div key={element.title} className="col s12 m10 offset-m1 l6 offset-l3">
                        {this.createInfoCard(element)}
                    </div>);

            });
            return items;
        }
    }
    render() {
        return (
            <main>
        		<h2 className="center-align">Contact Information</h2>
        		<div className="row container">
        			<div className="col m12 s12">
        				<h3 className="center-align blue-text">Instructors</h3>
        				{this.renderInfos(true)}
        			</div>
        			<div className="col m12 s12">
        				<h3 className="center-align blue-text">Teaching Assistants</h3>
        				{this.renderInfos(false)}
        			</div>

        		</div>
        	</main>
        );
    }
}

function mapStateToProps(state){
    return{
        info: state.info.info
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchInfo},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Info);
