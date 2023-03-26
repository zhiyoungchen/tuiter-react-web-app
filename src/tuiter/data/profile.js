const splitName = (fullName) => {
    let arr = fullName.split(" ");
    let firstName, lastName;
    if(arr.length >= 4 || arr.length === 0){
      firstName = "";
      lastName = "";
    }
    if(arr.length === 1){
      firstName = arr[0];
      lastName = "";
    }
    else if(arr.length === 2){
      firstName = arr[0];
      lastName = arr[1];
    }
    else if(arr.length === 3){
      firstName = arr[0] + " " + arr[1];
      lastName = arr[2];
    }
    return [firstName, lastName];
  }
  
  
  
  const profile = (state = {}, action) => {
    switch(action.type){
      case 'get-profile':
        return action.profile;
  
      case "modify-profile":
        const newProfile = action.profile;
        // console.log(`modifed profile is sent to reducer: ${newProfile}`);
        const nameResult = splitName(newProfile.fullName);
        const modifiedProfile = {
          ...state,
          firstName: nameResult[0],
          lastName: nameResult[1],
          bio: newProfile.bio,
          location: newProfile.location,
          website: newProfile.website
        };
        // console.log(`modified profile: ${modifiedProfile}`);
        return modifiedProfile;
      default:
        return state;
    }
  }
  
  
  export default profile;
  
  