import LocalHostMap from "../../utils/LocalHostMap";

export default (postBody) =>
  LocalHostMap.post("/product/createnewcomment", postBody).then(
    (response) => response.data
  );
