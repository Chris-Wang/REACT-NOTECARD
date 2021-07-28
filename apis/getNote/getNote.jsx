import LocalHostMap from "../../utils/LocalHostMap";
export default (noteId) =>
  LocalHostMap.get(`/note/${noteId}`).then((response) => response.data);
