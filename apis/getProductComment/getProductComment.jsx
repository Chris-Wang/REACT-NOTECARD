import LocalHostMap from "../../utils/LocalHostMap";
export default (productId) =>
  LocalHostMap.get(`/product/comments/${productId}`).then(
    (response) => response.data
  );
