import React from "react";
import { useDispatch } from "react-redux";

const TuitStats = (
  {
      post =     {
          "_id": "123", "topic": "Space", "username": "SpaceX",
          "handle": "@spacex", "time": "2h", "image": "spacex.jpg",
          "title": "SpaceX's Mission",
          "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
          "liked": true, "likes": 123, "replies": 123, "retuits": 123, "dislikes": 123, "disliked": false
      }
  }
) => {
  const [tuit, setNewTuit] = useState(post)
  const dispatch = useDispatch();
  const likeClickHandler = () => { 
    setNewTuit({...tuit, liked: !tuit.liked})
  }

  return (
    <div className="row mt-2">
      <div className="col">
        <i className="far fa-comment me-2"></i>
        {tuit.stats.comments}
      </div>
      <div className="col">
        <i className="fas fa-retweet me-2"></i>
        {tuit.stats.retuits}
      </div>
      <div className="col" onClick={likeClickHandler}>
        {tuit.liked && (
          <i
            className="fas fa-heart me-2"
            style={{ color: tuit.liked ? "red" : "white" }}
          ></i>
        )}
        {!tuit.liked && <i className="far fa-heart me-2"></i>}
        {tuit.stats.likes}
      </div>
      <div className="col">
        <i className="fas fa-external-link-alt me-2"></i>
      </div>
    </div>
  );
};

export default TuitStats;