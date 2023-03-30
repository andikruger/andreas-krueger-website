import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  return (
    // add color to the nav bar
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/" legacyBehavior>
                <a>Andreas Krüger</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li key={234}>
              <Link href={`/about`} legacyBehavior>
                <a className="uk-link-reset">About</a>
              </Link>
            </li>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.attributes.slug}`}
                    legacyBehavior
                  >
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
