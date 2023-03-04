
function PostSummaryItem(post){
  if (post === 'React JS'){
    return {
      "topic": "Web Development",
      "userName": "ReactJS",
      "time": "2h",
      "image": "../../images/react.png",
      "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    }

  }else if (post === 'JavaScript'){
    return {
      "topic": "Web Development",
      "userName": "JavaScript",
      "time": "1d",
      "image": "../../images/js.png",
      "title": "JavaScript is programming language that can run on browsers as well as desktop",
    }

  }else if (post === 'JQuery'){
    return {
      "topic": "Web Development",
      "userName": "JQuery",
      "time": "lask week",
      "image": "../../images/jq.png",
    }

  }else if (post === 'NodeJS'){
    return {
      "topic": "Web Development",
      "userName": "NodeJS",
      "time": "last month",
      "image": "../../images/nodejs.png",
    }

  }
}