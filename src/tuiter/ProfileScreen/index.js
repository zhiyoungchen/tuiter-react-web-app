import React, {useState} from "react";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import NavigationSidebar from "../navigation-sidebar";

const ProfileScreen = () => {
  const [edit, setEdit] = useState(false);
  return (
      <div className="row mt-2">
        <div className="col-2">
          <NavigationSidebar active={"profile"}/>
        </div>
        <div className="col-10">
          {!edit && <Profile setEdit={setEdit}/>}
          {edit && <EditProfile setEdit={setEdit}/>}
        </div>
      </div>
  );
}


export default ProfileScreen;

