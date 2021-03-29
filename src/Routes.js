import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import MovieApp from './component/MovieApp';
import Overview from "./component/Overview";
import WatchList from './component/WatchList';

export default ()=>
<Switch>
    <Route path='/' exact component={withRouter(MovieApp)}/>
    <Route path="/overview" exact component={withRouter(Overview)}/>
    <Route path="/watchlist" exact component={withRouter(WatchList)}/>

</Switch>

;