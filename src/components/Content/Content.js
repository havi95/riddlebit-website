import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Frontpage from './Frontpage/Frontpage';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';

class Content extends Component {

    onRouteChange(pathname) {
        let id = pathname.substr(1);
        let element = document.getElementById(id);
        if (element == null) {
            element = document.getElementById('header');
        }
        if (element != null) {
            element.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }

    componentDidMount() {
        let pathname = this.props.history.location.pathname;
        this.onRouteChange(pathname);
    }

    componentDidUpdate() {
        let pathname = this.props.history.location.pathname;
        this.onRouteChange(pathname);
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Frontpage} />
                <Route exact path='/about' component={Frontpage} />
                <Route exact path='/games' component={Frontpage} />
                <Route exact path='/contact' component={Contact} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default withRouter(Content);