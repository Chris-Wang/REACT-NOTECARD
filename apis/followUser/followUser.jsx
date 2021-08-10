import LocalHostMap from "../../utils/LocalHostMap";

export default (postBody) =>
  LocalHostMap.post("/user/followed", postBody)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
