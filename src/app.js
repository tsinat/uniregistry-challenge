import React, { Component } from 'react';

import '../css/main.css';
import DomainNameList from './components/nameList';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;
