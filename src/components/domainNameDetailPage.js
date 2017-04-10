import React from 'react';
import PropTypes from 'prop-types';

import DomainDetail from './domainDetail';

class DomainNameDetail extends React.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave(e) {
        e.preventDefault();
        this.context.router.push('/');
    }

    render() {
        return (
            <DomainDetail handleSave={this.handleSave.bind(this)} />
        );
    }
}

DomainNameDetail.contextTypes = {
  router: PropTypes.object.isRequired
}

export default DomainNameDetail;
