import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import CenterPost from "../PostList/PostItem";
import PostSummaryList from "../post-summary-list";
import WhatsHappening from "../WhatsHappening/whats-happening";
import TuitsList from "../tuits/TuitsList";


const HomeComponent = () => {
  return(
    <>
      <h4>Home</h4>
      <WhatsHappening/>
      <TuitsList/>
    </>
  );
 };
 export default HomeComponent;

