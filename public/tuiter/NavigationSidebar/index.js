const NavigationSidebar = () => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/public">
       <i class="fab fa-twitter"></i></a>
        <li class="list-group-item"><i class = "fa fa-home"></i>Home</li>
        <li class="list-group-item active"><i class = "fa fa-hashtag"></i>Explore</li>
        <li class="list-group-item"><i class = "fa fa-ring"></i>Notification</li>
        <li class="list-group-item"><i class = "fa fa-envelope"></i>Message</li>
        <li class="list-group-item"><i class = "fa fa-bookmark"></i>Bookmarks</li>
        <li class="list-group-item"><i class = "fa fa-list"></i>Lists</li>
        <li class="list-group-item"><i class = "fa fa-people-arrows"></i>Profile</li>
        <li class="list-group-item"><i class = "fa fa-comment-dots"></i>More</li>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

// function exploreComponent() {
//   $('#wd-explore').append(`
//   <div class="row mt-2">
//    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
//     ${NavigationSidebar()}
//    `);
// }
// $(exploreComponent);


