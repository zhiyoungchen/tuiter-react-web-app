import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import CenterPost from "../PostList/PostItem";
import PostSummaryList from "../post-summary-list";


const HomeComponent = () => {
  return (
      <div className="row mt-4">
        <div className="col-12 col-lg-12 col-xl-7 bg-primary text-white">
          <CenterPost/>
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-12 col-xl-5 bg-danger text-white">
          <PostSummaryList/>
        </div>
      </div>
  );
}
export default HomeComponent;

// function exploreComponent() {
//   $('#wd-explore').append(`
//        <h2>Explore</h2>
//   <div class="row mt-2">
//    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
//     ${NavigationSidebar()}
//    </div>
//    <div class="col-10 col-lg-7 col-xl-6 bg-primary text-white">
//     ${CenterPost()}
//    </div>
//    <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-danger text-white">
//     ${PostSummaryList()}
//    </div>
//   </div>
//    `);
// }
// $(exploreComponent);