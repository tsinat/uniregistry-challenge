import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const DomainDetail = (props) => {

    const  { domain, registrant_email, price } = props.detailData;
    const tmpPrice = parseFloat(price / 100).toFixed(2)

    return (
        <div className="container">
            <form className="form-detail clearfix">
                <div className="col-xs-3">
                    <label className="">Domain Name</label>
                </div>
                <div className="col-xs-9">
                    <input type="text" name="domain" value={domain} onChange={props.handleChange} className="form-control col-xs-6" id="name"/>
                </div>
                <div className="col-xs-3">
                    <label className="">Registrant Email</label>
                </div>
                <div className="col-xs-9">
                    <input type="text" name="email" value={registrant_email} onChange={props.handleChange} className="form-control" id="email"/>
                </div>
                <div className="col-xs-3">
                    <label className="">Price</label>
                </div>
                <div className="col-xs-9">
                    <input type="text" name="price" value={`${tmpPrice}`} onChange={props.handleChange} className="form-control" id="price"/>
                </div>
                <div className="col-xs-9 col-xs-offset-3">
                    <button type="submit" className="btn" onClick={props.handleSave}>
                        Save changes
                    </button>
                </div>
            </form>
        </div>
    );
}

DomainDetail.propTypes = {
    detailData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired
}

export default DomainDetail;
