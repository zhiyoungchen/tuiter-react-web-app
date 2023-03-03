import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore/index.js";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import WhoToFollowList from "./who-to-follow-list";
import ExlporePage from "./explore/exlpore";

function Tuiter() {
  return (
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>
          <Routes>
            <Route path="/home"    element={<HomeComponent/>}/>
            <Route path="/explore" element={<ExlporePage/>}/>
          </Routes>
        </div>
      </div>
  );
}
export default Tuiter