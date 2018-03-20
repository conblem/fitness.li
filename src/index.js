import { h, app } from "hyperapp";
import { Link, Route, location } from "@hyperapp/router";

import Sidebar from "./components/Sidebar";
import Slideout from "./components/Slideout";

const state = {
  location: location.state,
  isNavigationOpen: false
};

const actions = {
  location: location.actions,
  toggleNavigation: () => ({ isNavigationOpen, ...rest }) => ({
    isNavigationOpen: !isNavigationOpen,
    ...rest
  })
};

const view = (state, actions) => (
  <div>
    <Slideout>
      <Sidebar />
    </Slideout>
    <div class="tabs">
      <ul>
        <li class="is-active">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  </div>
);

app(state, actions, view, document.body);
