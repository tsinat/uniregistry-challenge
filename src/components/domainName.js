import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const DomainName = (props) => {
    const extension = props.data.domain.split('.')[1],
          selectedDomains = ['cars', 'lol'],
          check = selectedDomains.indexOf(extension) !== -1 ? true : false,
          price = parseFloat(props.data.price / 100).toFixed(2)

    return (
        <tr>
            <td> <Link to={`/detail/${props.data.domain}`} className="primary">{props.data.domain}</Link></td>
            <td className="text-center primary">{check ? <span className="glyphicon glyphicon-ok"></span>: ''}</td>
            <td className="text-right">${price}</td>
        </tr>
    );
}

DomainName.propTypes = {
    data: PropTypes.object.isRequired
}

export default DomainName;
