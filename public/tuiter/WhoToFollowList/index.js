// import "./WhoToFollowListItem";
// import "./who";
const WhoToFollowList = () => {
  return (`
    <div>
      <ul class="list-group  wd-background_grey" style = "text-align: left">
        <li class="list-group-item">Who to follow</li>
        <li class="list-group-item"><img class="wd-img"
                                         src="../image/java.png"
                                         alt="Avatar"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java@Java&nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn btn-primary" style="align-content: end">
          Follow
        </button></li>
        <li class="list-group-item"><img class="wd-img"
                                         src="../image/rs.png"
                                         alt="Avatar"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Relatively space@rs&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-primary">
          Follow
        </button></li>
        <li class="list-group-item"><img class="wd-img"
                                         src="../image/vg.png"
                                         alt="Avatar"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virgin Galatic@vg&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-primary">
          Follow
        </button></li>
        <li class="list-group-item"><img class="wd-img"
                                         src="../image/nasa.png"
                                         alt="Avatar"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NASA@NASA&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-primary">
          Follow
        </button></li>
        <li class="list-group-item"><img class="wd-img"
                                         src="../image/tesla.png"
                                         alt="Avatar"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tesla@Tesla&nbsp&nbsp;&nbsp;&nbsp
                                         <button class="btn btn-primary">Follow</button></li>
      </ul></div></div>
`);
}


export default WhoToFollowList;

// function exploreComponent() {
//   $('#wd-explore').append(`
//   <div class="row mt-2">
//    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
//    <!--<h3>Navigation Sidebar</h3>-->
//     ${WhoToFollowList()}
//    `);
// }
// $(exploreComponent);


