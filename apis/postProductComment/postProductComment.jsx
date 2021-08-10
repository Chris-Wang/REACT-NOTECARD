import LocalHostMap from "../../utils/LocalHostMap";

export default (postBody) =>
  LocalHostMap.post("/product/newcomment", postBody).then(
    (response) => response.data
  );
