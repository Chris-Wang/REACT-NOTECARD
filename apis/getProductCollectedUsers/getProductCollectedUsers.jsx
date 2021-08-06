import LocalHostMap from "../../utils/LocalHostMap";

export default (noteId) =>
  LocalHostMap.get(`/product/getcollectedusers/${noteId}`).then((response) => response.data);