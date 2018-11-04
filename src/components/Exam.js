import React, { Component } from 'react';

class Exam extends Component {
    render() {
        const title=this.props.title;
        const listSolution = this.props.solutions.map(solution=>(
            <li>
                <strong>{solution.name}</strong>: <a href={`${process.env.PUBLIC_URL}/${solution.link}`}>{title}-{solution.name}.pdf</a>
            </li>
        ));
        return (
            <li type={this.props.type} id={this.props.title} className={this.props.isActive ? "active" : ""}>
                <div className={`${this.props.isActive ? "collapsible-header active active-collapsible" : "collapsible-header"}`}>{this.props.title} </div>
                <div className="collapsible-body white" style={this.props.isActive ? {display: "block"} : {}}>
                    <ul>
                        {listSolution}
                    </ul>
                </div>
            </li>
        );
    }
}

export default Exam;
