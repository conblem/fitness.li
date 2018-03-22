import { h, app } from "hyperapp";
import { Link, Route, location } from "@hyperapp/router";
import * as firebase from "firebase/app";
import "firebase/auth";

import "./style/index";
import firebaseConfig from "../config/firebase.json";
import * as actions from "./actions";
import Sidebar from "./components/Sidebar";
import Slideout from "./components/Slideout";

firebase.initializeApp(firebaseConfig);

const state = {
  data: {},
  location: location.state,
  isNavigationOpen: false
};

const view = ({ data }, { get }) => {
  return (
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
};

app(state, actions, view, document.body);
