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
      <div class={"slideout " + cssStyle}>
        <div class="level">
          <div class="level-right">
            <div class="level-item">
              <a onclick={toggleNavigation} class="button is-text">
                X
              </a>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Slideout;
