import LocalHostMap from "../../utils/LocalHostMap";
export default () =>
  LocalHostMap.get(`/product/landingproducts`).then(
    (response) => response.data
  );
