import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './Content.css';
import Frontpage from './Frontpage/Frontpage';
import Contact from './Contact/Contact';
import Privacy from './Privacy/Privacy';
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
            <div className='content-wrapper'>
            <Switch>
                <Route exact path='/' component={Frontpage} />
                <Route exact path='/about' component={Frontpage} />
                <Route exact path='/projects' component={Frontpage} />
                <Route exact path='/our-team' component={Frontpage} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/privacy' component={Privacy} />
                <Route component={NotFound} />
            </Switch>
            </div>
        )
    }
}

export default withRouter(Content);