import LocalHostMap from "../../utils/LocalHostMap";
export default (productId) =>
  LocalHostMap.get(`/product/relatednotes/${productId}`).then(
    (response) => response.data
  );
