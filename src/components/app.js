import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                Hello React
                {this.props.children}
            </div>
        );
    }
}
