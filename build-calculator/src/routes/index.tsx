import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "../views/Home/index";
import { Ds1BuildCalculator } from "../views/ds1/index";
import { Layout } from "../layouts/Main";

interface RouteProps {
  component: any;
  exact: boolean;
  key: string;
  path: string;
}

const RouteWithLayout = ({
  component: Component,
  exact,
  key,
  path,
}: RouteProps) => {
  return (
    <Route
      exact={exact}
      key={key}
      path={path}
      render={() => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <RouteWithLayout exact path="/" key="/" component={Home} />
        <RouteWithLayout
          exact
          path="/darksouls1"
          key="/darksouls1"
          component={Ds1BuildCalculator}
        />
        {/* <Route exact path="/darksouls2" component={Home} /> */}
        {/* <Route exact path="/darksouls3" component={Home} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
