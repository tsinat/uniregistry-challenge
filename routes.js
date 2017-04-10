import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './src/app';
import DomainNameList from './src/components/nameListPage';
import DomainDetail from './src/components/domainNameDetailPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={DomainNameList} />
        <Route path="/detail/:email" component={DomainDetail} />
    </Route>
);
