const PostSummaryList = () => {
  return (`
      <ul class="list-group" style = "text-align: left">
        <li class="list-group-item wd-title_text">Web Development<br><p class = wd-body_text>React.Js is a component based front end library that makes it very easy to build Single Page Applications or SPAs</p><p>123k Tuits</p>
                                         <img class="wd-img"
                                         src="../image/react.png"/>

                                         </li>
        <li class="list-group-item wd-title_text">JavaScript<br><p class =wd-body_text>JavaScript is programming language that can run on browsers as well as desktop</p><p class=""wd-grey_text>123k Tuits</p>
                                         <img class="wd-img"
                                         src="../image/js.png"/>
        <li class="list-group-item wd-title_text">JQuery<p>123K Tuits</p>
                                         <img class="wd-img"
                                         src="../image/jq.png"/>
        </li>
        <li class="list-group-item wd-title_text">NodeJS<p>123 Tuits</p>
                                         <img class="wd-img"
                                         src="../image/nodejs.png"/>
        </li>
      </ul>
  `)
}
export default PostSummaryList;

// function exploreComponent() {
//   $('#wd-explore').append(`
//   <div class="row mt-2">
//    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
//    <!--<h3>Navigation Sidebar</h3>-->
//     ${PostSummaryList()}
//    `);
// }
// $(exploreComponent);