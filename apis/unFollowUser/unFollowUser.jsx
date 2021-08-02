import LocalHostMap from "../../utils/LocalHostMap";

export default (userId, followedUserId) =>
  LocalHostMap.delete(`/user/unfollow/${userId}/${followedUserId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
