function WhoToFollowListItem(userName) {
  if (userName === 'Java'){
    return {
      avatarIcon: '../../images/java.png',
      userName: 'Java',
      handle: 'Java',
    }
  }else if (userName === 'Relativity Space'){
    return {
      avatarIcon: '../../images/rs.png',
      userName: 'Relativity Space',
      handle: 'relarivityspace',
    }
  }else if (userName === 'Virgin Galactic'){
    return {
      avatarIcon: '../../images/vg.png',
      userName: 'Virgin Galactic',
      handle: 'virgingalactic',
    }

  }else if (userName === 'NASA' ){
    return {
      avatarIcon: '../../images/nasa.png',
      userName: 'NASA',
      handle: 'nasa',
    }
  }else if (userName === 'Tesla'){
    return{
      avatarIcon: '../../images/tesla.png',
      userName: 'Tesla',
      handle: 'tesla',
    }
  }
}
$(WhoToFollowListItem);

import "who.js";


