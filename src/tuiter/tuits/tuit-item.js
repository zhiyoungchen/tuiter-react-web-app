import React from "react";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";
import "./tuit.css";
import TuitStats from "./TuitStats";

const TuitListItem = (
  {
      post = {
          "_id": "123", "topic": "Space", "username": "SpaceX",
          "handle": "@spacex", "time": "2h", "image": "spacex.jpg",
          "title": "SpaceX's Mission",
          "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
          "liked": true, "likes": 2345, "replies": 123, "retuits": 432, "dislikes": 678, "disliked": false
      }
  }
) => {
  const dispatch = useDispatch();
  const deleteTuitClickHandler = (id) => {
      dispatch(deleteTuitThunk(id));
  }

  return (
    <li className="list-group-item">
      <table>
        <tbody>
          <tr>
            <td className="align-text-top">
              <img
                className="rounded-circle wd-avatar-image"
                src={tuit["logo-image"]}
                alt="foo"
              />
            </td>
            <td className="ps-3" style={{ width: "100%" }}>
              <i
                onClick={deleteTuitClickHandler}
                className="fa fa-times fa-pull-right"
                style={{ color: "white" }}
              ></i>
              <span className="fw-bold">{tuit.postedBy.username}</span>
              {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
              <span className="ms-1 text-secondary">@{tuit.handle}</span>
              <div>{tuit.tuit}</div>
              {tuit.attachments && tuit.attachments.image && (
                <img
                  src={tuit.attachments.image}
                  className="mt-2 wd-border-radius-20px"
                  style={{ width: "100%" }}
                  alt="foo"
                />
              )}
              <TuitStats tuit={tuit} />
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default TuitListItem;