import React, { Component } from 'react';

class InfoCard extends Component {
    constructor(props){
        super(props);
    }
    renderLectures(){
        return <p>asdqwe</p>;
    }
    render() {
        return (
            <div className="card blue-grey darken-2">
                <div className="card-content white-text">
                    <span className="card-title">{this.props.title}</span>
                    {this.props.lecture && <p><span className="mini-title">Lecture: </span>{this.renderLectures().bind(this)}</p> }
                    <p><span className="mini-title">Office: </span>{this.props.office}</p>
                    <p><span className="mini-title">Office Hours: </span>{this.props.officeHours}</p>
                </div>
                <div className="card-action">
                    <a href={"mailto:"+this.props.mail}>E-mail: {this.props.mail}</a>
                </div>
            </div>
        );
    }
}

export default InfoCard;
