import LocalHostMap from "../../utils/LocalHostMap";
export default () =>
  LocalHostMap.get(`/product/relatednotes/1`).then((response) => response.data);
