import { location as router } from "@hyperapp/router";

import { projectId } from "../../config/firebase.json";

const BASE_URL = `https://firestore.googleapis.com/v1beta1/projects/${projectId}/databases/(default)/documents/`;

export const get = () => (state, { getReceived }) =>
  fetch(BASE_URL)
    .then(res => res.json())
    .then(res => {
      getReceived(res);
    })
    .catch(console.error);

export const getReceived = value => ({ data, ...rest }) => ({ value, ...rest });

export const location = router.actions;

export const toggleNavigation = () => ({ isNavigationOpen, ...rest }) => ({
  isNavigationOpen: !isNavigationOpen,
  ...rest
});
