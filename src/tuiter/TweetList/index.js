import React from "react";
import TweetItem from "./TweetItem.js";
import {useSelector} from "react-redux";
import Whatshappening from "../WhatsHappening";
const selectAllTweets = (state) => state.tweets;


const TweetList = () => {
  const tweets = useSelector(selectAllTweets);
  // console.log(tweets);
  return(
      <div className="container">
        <Whatshappening/>
      {
        tweets.map((tweet)=>{
          return <TweetItem tweet={tweet}/>
        })
      }
      </div>
  );
}


export default TweetList;