import React from "react";
const CenterPost = () => {
  return(
      <div className = "list-group">
        <a className= "list-group-item" >
          <img width={80} className="float rounded-5" src ="/images/elonmuck.jpeg"/>
          Elon Musk
          @elonmusk<br />
          Amazing show about @inspireation4x, Everyone should go check it out
          <img width={300} className="float-left rounded-0" src ="/images/as.jpeg"/>
        </a>
        <a className= "list-group-item">
          <img width={80} className="float rounded-5" src ="/images/nyt.jpeg"/>
          New York Post
          @nypost<br />
          Grimes seen reading Karl Marx following split with world's reachest man Elon Musk
          <img width={300} className="float rounded-0" src ="/images/read.jpeg"/>
        </a>
      </div>
  );
};
export default CenterPost;