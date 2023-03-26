import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
      <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
          Home
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
          Explore
        </Link>
        <Link to="/tuiter/ProfileScreen" className={`list-group-item ${active === 'ProfileScreen'?'active':''}`}>
          Profile
        </Link>
        <Link to="/" className="list-group-item">
          Labs
        </Link>
        <a className={`list-group-item ${active === 'more'?'active':''}`}>
          Notifications
        </a>
        <a className={`list-group-item ${active === 'more'?'active':''}`}>
          Messages
        </a>
        <a className={`list-group-item ${active === 'more'?'active':''}`}>
          More
        </a>
      </div>
  );
};
export default NavigationSidebar;