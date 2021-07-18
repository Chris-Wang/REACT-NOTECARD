import LocalHostMap from "../../utils/LocalHostMap";

export default (noteId) =>
  LocalHostMap.get(`/product/linkedproducts/${noteId}`).then((response) => response.data);