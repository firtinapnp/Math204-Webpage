import React, { Component } from 'react';

class HomeWork extends Component {
    createTable(element,key){
        return(
            <table key={key} className="bordered striped">
                <thead>
                    <tr>
                        <th>Section</th>
                        <th>Problems</th>
                    </tr>
                </thead>
                <tbody>
                    {element.map(el=>(
                        <tr key={el.section}>
                            <td>{el.section}</td>
                            <td>{(str=>str.substr(0,str.length-2))(el.problems.reduce(((previousVal, currentVal)=> (previousVal + currentVal+", ")),""))}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        );
    }
    render() {
        return (
            <li id={this.props.title} className={this.props.isActive ? "active" : ""}>
                <div className={`${this.props.isActive ? "collapsible-header active active-collapsible" : "collapsible-header"}`}>{this.props.title} </div>
                <div className="collapsible-body white" style={this.props.isActive ? {display: "block"} : {}}>
                    {this.createTable(this.props.table,this.props.title)}
                </div>
            </li>
        );
    }
}

export default HomeWork;
