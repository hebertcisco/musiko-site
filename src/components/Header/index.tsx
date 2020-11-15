import React from "react";
import { IHeader, INavLinks } from "../../utils/types";

interface IHeaderProps {
  header: IHeader;
}

const HeaderComponent: React.FC<IHeaderProps> = ({ header }) => {
  return (
    <header className="header" id="home">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="">
            <img src={header?.logo} alt="" width="110" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {header?.nav.links.map((links: INavLinks) => {
                return (
                  <li key={links.name} className="nav-item">
                    <a className={links.current} href={links.ref}>
                      {links.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default HeaderComponent;
