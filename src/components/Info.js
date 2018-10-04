import React, {Component} from "react";
import InfoCard from "./InfoCard";

class Info extends Component {
    render() {
        return (
            <main>
        		<h2 class="center-align">Contact Information</h2>
        		<div class="row container">
        			<div class="col m12 s12">
        				<h3 class="center-align blue-text">Instructor</h3>
        				<div class="col s12 m6 offset-m3">
        					<InfoCard/>
        				</div>
        			</div>
        			<div class="col m12 s12">
        				<h3 class="center-align blue-text">Teaching Assistants</h3>
        				<div class="col s12 m12 l12 xl6">
        					<InfoCard/>
        				</div>
        				<div class="col s12 m12 l12 xl6">
        					<InfoCard/>
        				</div>
        				<div class="col s12 m12 l12 xl6">
        					<InfoCard/>
        				</div>
                        <div class="col s12 m12 l12 xl6">
        					<InfoCard/>
        				</div>
        			</div>

        		</div>
        	</main>
        );
    }
}

export default Info;
