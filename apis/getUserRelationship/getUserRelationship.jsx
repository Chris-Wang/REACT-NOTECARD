import LocalHostMap from "../../utils/LocalHostMap";

export default (userId, followedUserId) =>
  LocalHostMap.get(`/user/userelationship/${userId}/${followedUserId}`).then(
    (response) => response.data
  );
