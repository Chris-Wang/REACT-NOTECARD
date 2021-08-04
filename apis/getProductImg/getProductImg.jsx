import LocalHostMap from "../../utils/LocalHostMap";
export default (productId) =>
  LocalHostMap.get(`/product/images/${productId}`).then(
    (response) => response.data
  );
