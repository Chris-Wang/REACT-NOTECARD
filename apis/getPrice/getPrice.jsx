import LocalHostMap from "../../utils/LocalHostMap";
export default (productId) =>
  LocalHostMap.get(`/product/price/${productId}`).then(
    (response) => response.data
  );
