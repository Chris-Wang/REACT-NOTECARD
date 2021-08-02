import LocalHostMap from "../../utils/LocalHostMap";

export default (postBody) =>
  LocalHostMap.post("/user/follow", postBody)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
