import PostSummaryList
  from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
      <div>
        <input type="text"
               placeholder="Search Tuiter">
        <i class = "fa fa-tools"></i>
      </div>
      <div>
      <ul class="nav nav-tabs wd-topmargin">
        <li class="nav-item wd-borderunder">
          <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
      </ul>
      </div>
       <img width="400px"
           src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
      <br/>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
