import LocalHostMap from "../../utils/LocalHostMap";

export default (postBody) =>
  LocalHostMap.post("/product/collect", postBody)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
