import React from "react";
import { useDispatch } from "react-redux";
import "./tuit.css";
import TuitStats from "./TuitStats";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitClickHandler = () => {
    dispatch({ type: "delete-tuit", tuit });
  };

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