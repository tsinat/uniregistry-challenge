import React from 'react';
import PropTypes from 'prop-types';

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
            <div className="container">
                <form className="form-detail clearfix">
                    <div className="col-xs-3">
                        <label className="">Domain Name</label>
                    </div>
                    <div className="col-xs-9">
                        <input type="text" className="form-control col-xs-6" id="name"/>
                    </div>
                    <div className="col-xs-3">
                        <label className="">Registrant Email</label>
                    </div>
                    <div className="col-xs-9">
                        <input type="text" className="form-control"  id="email"/>
                    </div>
                    <div className="col-xs-3">
                        <label className="">Price</label>
                    </div>
                    <div className="col-xs-9">
                        <input type="text" className="form-control" id="price" />
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

DomainNameDetail.contextTypes = {
  router: PropTypes.object.isRequired
}

export default DomainNameDetail;
