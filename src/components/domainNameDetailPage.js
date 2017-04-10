import React from 'react';
import PropTypes from 'prop-types';

import DomainDetail from './domainDetail';
import selfdriving from '../../assets/3.json';
import greendiamondsky from '../../assets/2.json';
import foodfighters from '../../assets/1.json';

class DomainNameDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = { detailData: ''}
        this.handleSave = this.handleSave.bind(this);
        this.fetchDetail = this.fetchDetail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        const path = this.props.location.pathname.split('/')[2];
        const detailData = this.fetchDetail(path);
        this.setState({detailData: detailData});
    }
    fetchDetail(path) {
        if(path === 'selfdriving.cars') {
            return selfdriving;
        } else if(path === 'greendiamondsky.com') {
            return greendiamondsky;
        } else if(path === 'foodfighters.lol') {
            return foodfighters;
        }
    }

    handleSave(e) {
        e.preventDefault();
        this.context.router.push('/');
    }

    handleChange() {

    }

    render() {
        return (
            <DomainDetail
                handleSave={this.handleSave}
                detailData={this.state.detailData}
                handleChange={this.handleChange} />
        );
    }
}

DomainNameDetail.contextTypes = {
  router: PropTypes.object.isRequired
}

export default DomainNameDetail;
