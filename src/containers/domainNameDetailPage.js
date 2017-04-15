import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import DomainDetail from '../components/domainDetail';
import selfdriving from '../../assets/3.json';
import greendiamondsky from '../../assets/2.json';
import foodfighters from '../../assets/1.json';

class DomainNameDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tempData: {}
        }
        this.fetchDetail = this.fetchDetail.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentWillMount() {
        const path = this.props.location.pathname.split('/')[2];
        const detailData = this.fetchDetail(path);
        this.setState({tempData: detailData});
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

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                <DomainDetail
                    handleSave={this.handleSave}
                    detailData={this.state.tempData}
                    handleChange={this.handleChange} />
            </ReactCSSTransitionGroup>
        );
    }
}

DomainNameDetail.contextTypes = {
    router: PropTypes.object.isRequired
}

export default DomainNameDetail;
