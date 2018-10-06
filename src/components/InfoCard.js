import React, { Component } from 'react';

class InfoCard extends Component {
    render() {
        return (
            <div className="card blue-grey darken-2">
                <div className="card-content white-text">
                    <span className="card-title">{this.props.title}</span>
                    {this.props.isInstructor && <p><span className="mini-title">Lecture: </span>{this.props.lectures}</p> }
                    <p><span className="mini-title">Office: </span>{this.props.office}</p>
                    <p><span className="mini-title">Office Hours: </span>{this.props.officeHours}</p>
                </div>
                <div className="card-action">
                    <a className="white-text" href={"mailto:"+this.props.mail}>E-mail: <span className="blue-darker-text">{this.props.email}</span></a>
                </div>
            </div>
        );
    }
}

export default InfoCard;
