import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './src/app';
import DomainNameList from './src/components/nameList';
import DomainDetail from './src/components/domainNameDetail';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={DomainNameList} />
        <Route path="/detail/:email" component={DomainDetail} />
    </Route>
);
