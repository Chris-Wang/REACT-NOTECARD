import LocalHostMap from "../../utils/LocalHostMap";

export default (postBody) =>
  LocalHostMap.post("/note/likenote", postBody)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
