const CenterPost = () => {
  return (`
      <ul class="list-group" style = "text-align: left">
        <li class="list-group-item wd-title_text"><img class="wd-img"
                                         src="../image/elonmuck.jpeg"
                                         alt="Avatar"/>&nbsp&nbsp&nbsp&nbsp&nbspElon Musk @elonmusk<br>
                                         <p class = wd-body_text>&nbsp&nbsp&nbsp&nbsp&nbspAmazing show about @inspireation4x</p><br>
                                         <img 
                                         width="400px"
                                         src="../image/as.jpeg"/><br>
                                         <i class="fa-regular fa-comment-dots"></i> 4.2k
                                         <i class="fa-regular fa-retweet"></i> 3.5k
                                         <i class="fa-regular fa-heart"></i> 37.5k
                                         <i class="fa-regular fa-upload"></i>
                                         </li>
        <li class="list-group-item wd-title_text"><img class="wd-img"
                                         src="../image/nyt.jpeg"
                                         alt="Avatar"/>&nbsp&nbsp&nbsp&nbsp&nbspNew York Post @nypost<br>
                                         <p class =wd-body_text>&nbsp&nbsp&nbsp&nbsp&nbspGrimes seen reading Karl Marx following split with world's reachest man Elon Musk</p>
                                         <img 
                                         width="400px"
                                         src="../image/read.jpeg"/><br>
                                         <i class="fa-regular fa-comment-dots"></i> 965
                                         <i class="fa-regular fa-retweet"></i> 2.4k
                                         <i class="fa-regular fa-heart"></i> 4k
                                         <i class="fa-regular fa-upload"></i>
      </ul>
  `)
}
export default CenterPost;

// function exploreComponent() {
//   $('#wd-explore').append(`
//   <div class="row mt-2">
//    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
//    <!--<h3>Navigation Sidebar</h3>-->
//     ${PostSummaryList()}
//    `);
// }
// $(exploreComponent);