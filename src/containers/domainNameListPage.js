import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import data from '../../assets/domains.json';
import DomainName from '../components/domainName';

class DomainNameList extends React.Component {
    renderList() {
        let domainsList = data.domains.map((domain, idx) => {
            return (<DomainName data= {domain} key={idx} />);
        });
        return domainsList;
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppearTimeout={500}
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}>
                <div className="panel panel-default">
                    <div className="panel-body text-center">
                        <h4>Uniregistry Coding Challenge</h4>
                    </div>
                </div>
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
            </ReactCSSTransitionGroup>
        );
    }
}

export default DomainNameList;
