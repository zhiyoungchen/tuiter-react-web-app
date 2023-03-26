import React from "react";
import {useDispatch} from "react-redux";


const TweetItem = ({tweet}) => {
  const dispatch = useDispatch();
  // all actions
  const deleteAction = {
    type: "delete-tweet",
    tweet
  };
  const likeAction = {
   type: 'like-tweet',
   tweet
  };

  const deleteTweetClickHandler = () => {
    dispatch(deleteAction);
  }

  const likeClickHandler = () => {
    dispatch(likeAction);
  }

  return(
    <div className="wd-bookmark-sample container-fluid">
      <img src={tweet.userImg} alt="user-image" className="wd-bookmark-usr-img"/>

      <div className="wd-bookmark-user-response">
          <div>

              <i onClick = {deleteTweetClickHandler} className="fas fa-times fa-pull-right"></i>

            <p className="wd-bookmark-otheruser wd-text-white">
              {tweet.userName}
              <span className="wd-text-lightgray wd-text-opacity-half"> @{tweet.userAccount} . {tweet.time}
              </span>
            </p>

            <p className="wd-bookmark-otheruser-text wd-text-white">{tweet.response}</p>
            <div className="wd-gray-border wd-rounded-border ">
              <img className="wd-bookmark-post-image" src={tweet.reference.imgSource} alt="post-image"/>
              <div className="wd-padding-12">
                <p className="wd-bookmark-post-title">{tweet.reference.title}</p>
                <p className="wd-bookmark-post-text wd-text-opacity-half">
                  {tweet.reference.content}
                </p>
              </div>

            </div>
          </div>

          {/*footer icons*/}
          <div className="wd-icons wd-text-opacity-half">
            
            <a href="#" className="wd-icon-spaceout wd-text-lightgray">
              <i className="far fa-comment"></i>
              <span className="wd-icon-space">
                {tweet.commentNumber}
              </span>
            </a>


            <a href="#" className="wd-icon-spaceout wd-text-lightgray">
              <i className="fas fa-retweet"></i>
              <span className="wd-icon-space">
                {tweet.retweetNumber}
              </span>
            </a>

            <a href="#" className="wd-icon-spaceout">
              <>
              {
                tweet.liked && <i className="fas fa-heart" style={{color: tweet.liked ? "red" : "white"}} onClick={likeClickHandler}></i>
              }
              {
                !tweet.liked && <i className="fas fa-heart" onClick={likeClickHandler}></i>
              }
              <span className="wd-icon-space">
                {tweet.loveNumber}
              </span>
              </>
            </a>

            <a href="#" className="wd-icon-spaceout wd-text-lightgray">
            <i className="fal fa-upload"></i>
            </a>
          </div>

      </div>
    </div>
  );
}


export default TweetItem;