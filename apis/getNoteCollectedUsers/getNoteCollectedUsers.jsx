import LocalHostMap from "../../utils/LocalHostMap";

export default (noteId) =>
  LocalHostMap.get(`/note/getcollectedusers/${noteId}`).then((response) => response.data);