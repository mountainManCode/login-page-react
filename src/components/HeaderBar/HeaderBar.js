import React, { Component } from 'react';
import '../../styles/css/headerBar.css';

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1 className="headerBar-title">Acme Services</h1>
            </div>
        );
    }
}
export default HeaderBar;
