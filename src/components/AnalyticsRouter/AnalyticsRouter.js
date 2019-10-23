import { Component } from "react";
import { withRouter } from "react-router-dom";
import analytics from "../../analytics";

class AnalyticsRouter extends Component {

  componentDidMount() {
    analytics.initialize();
    analytics.pageview(this.props.location.pathname);
  }

  componentDidUpdate({location, history}) {
    if (location.pathname === this.props.location.pathname) {
      return;
    }

    if (history.action === 'PUSH') {
      analytics.pageview(location.pathname);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(AnalyticsRouter);