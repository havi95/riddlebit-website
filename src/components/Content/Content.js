import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Content.css';
import Frontpage from './Frontpage';
import Contact from './Contact';
import Jobs from './Jobs';
import Privacy from './Privacy';
import NotFound from './NotFound';

export default class Content extends Component {

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
                {/* <Route exact path='/jobs' component={Jobs} /> */}
                <Route exact path='/privacy' component={Privacy} />
                <Route exact path='/partners' component={Frontpage} />
                <Route component={NotFound} />
            </Switch>
            </div>
        )
    }
}