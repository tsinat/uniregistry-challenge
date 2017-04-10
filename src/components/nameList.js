import React from 'react';
import PropTypes from 'prop-types';

import data from '../../assets/domains.json';
import DomainName from './domainName';

class DomainNameList extends React.Component {
    renderList() {
        let domainsList = data.domains.map((domain, idx) => {
            return (<DomainName data= {domain} key={idx} />);
        });
        return domainsList;
    }

    render() {
        return (
            <div className="container table-list">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="text-left">Domain Name</th>
                            <th className="text-center">Uniregistry</th>
                            <th className="text-right">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderList() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DomainNameList;
