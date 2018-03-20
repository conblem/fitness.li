import { h } from "hyperapp";

import "./Slideout.sass";

const Slideout = (props, children) => (
  { isNavigationOpen },
  { toggleNavigation }
) => {
  console.log(toggleNavigation);
  const cssStyle = isNavigationOpen ? "show" : "";
  return (
    <div>
      <a onclick={toggleNavigation} class="button is-active">
        Active
      </a>
      <div class={"slideout " + cssStyle}>{children}</div>
    </div>
  );
};

export default Slideout;
