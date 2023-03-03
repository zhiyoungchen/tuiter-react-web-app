import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import WhoToFollowList from "../who-to-follow-list";
import NavigationSidebar from "../navigation-sidebar";
import CenterPost from "../PostList/PostItem";
import ExploreComponent from "./index";


const ExlporePage = () => {
  return (
      <div className="row mt-4">
        <div className="col-12 col-lg-12 col-xl-7 bg-primary text-white">
          <ExploreComponent/>
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-12 col-xl-5 bg-danger text-white">
          <WhoToFollowList/>
        </div>
      </div>
  );
}
export default ExlporePage;