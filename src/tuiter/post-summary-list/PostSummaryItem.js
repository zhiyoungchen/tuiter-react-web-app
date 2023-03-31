import React from "react";



const PostSummaryItem = ({post}) => {
  return (
            <div className="row wd-tweet wd-light-gray-border-upper">
              <div className="col-9">
                <p className="wd-light-gray wd-opacity-70">{post.topic}</p>
                <p className="font-weight-bolder">{post.userName} <i className="fas fa-check-circle wd-verifed-fa"></i><span className="wd-light-grey"> - {post.time}</span></p>
                <p className="font-weight-bolder">
                  {post.title}
                </p>
              </div>

              <div className="col-3 align-self-center justify-content-center">
                <img className="wd-tweet-img" src={post.image} alt="react icon"/>
              </div>

            </div>
  )
}


export default PostSummaryItem;
// import React from "react";
// const PostSummaryItem = (
//     {
//       post = {
//         topic: "Space",
//         userName: "SpaceX",
//         time: "2h",
//         title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
//         image: "tesla.png"
//       }
//     }
// ) => {
//   return(

//       <li className="list-group-item">
//         <div className="row">
//           <div className="col-10">
//             <div>{post.userName} . {post.time}</div>
//             <div className="fw-bolder">{post.topic}</div>
//             <div>{post.title}</div>
//           </div>
//           <div className="col-2">
//             <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
//           </div>
//         </div>
//       </li>
//   );
// };
// export default PostSummaryItem;