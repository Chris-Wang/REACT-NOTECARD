import LocalHostMap from "../../utils/LocalHostMap";
export default (productId) =>
  LocalHostMap.get(`/product/${productId}`).then((response) => response.data);
