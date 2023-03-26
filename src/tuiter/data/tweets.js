const tweets = (state = [], action) => {
    switch(action.type){
      case 'fetch-all-tweets':
        return(
          action.tweets
        );
      case 'create-tweet':
        return [action.newTweet, ...state];
      case 'delete-tweet':
        return state.filter(tweet => tweet._id !== action.tweet._id);
  
        case 'like-tweet':
        // use find method to find the corresponding tweet
        const likedTweet = state.find(tweet => tweet._id === action.tweet._id);
        console.log(`found tweet that was liked: ${likedTweet}`);
        if(likedTweet.liked === true){
          likedTweet.liked = false;
          likedTweet.loveNumber --;
        }else{
          likedTweet.liked = true;
          likedTweet.loveNumber ++;
        }
        return state;
  
        default:
        return(state);
    }
  };
  // reducer is imported in Build/index.js
  export default tweets;
  