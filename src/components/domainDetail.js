import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class DomainDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: this.props.detailData.domain,
            email: this.props.detailData.registrant_email,
            price: this.props.detailData.price
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSave(e) {
        e.preventDefault();
        this.context.router.push('/');
    }

    render() {
        const price = parseFloat(this.state.price / 100).toFixed(2)
        return (
            <div className="container">
                <form className="form-detail clearfix">
                    <div className="col-xs-3">
                        <label className="">Domain Name</label>
                    </div>
                    <div className="col-xs-9">
                        <input type="text"
                            name="domain"
                            value={this.state.domain}
                            onChange={this.handleChange}
                            className="form-control col-xs-6" id="name"/>
                    </div>
                    <div className="col-xs-3">
                        <label className="">Registrant Email</label>
                    </div>
                    <div className="col-xs-9">
                        <input type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control"  id="email"/>
                    </div>
                    <div className="col-xs-3">
                        <label className="">Price</label>
                    </div>
                    <div className="col-xs-9">
                        <input type="text"
                            name="price"
                            value={`${price}`}
                            onChange={this.handleChange}
                            className="form-control" id="price" />
                    </div>
                    <div className="col-xs-9 col-xs-offset-3">
                        <button type="submit" className="btn"
                            onClick={ this.handleSave }>
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

DomainDetail.contextTypes = {
  router: PropTypes.object.isRequired
}

export default DomainDetail;
