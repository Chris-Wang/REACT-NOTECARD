import LocalHostMap from "../../utils/LocalHostMap";

export default (userId, followedUserId) =>
  LocalHostMap.delete(`/user/unfollowed/${userId}/${followedUserId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
