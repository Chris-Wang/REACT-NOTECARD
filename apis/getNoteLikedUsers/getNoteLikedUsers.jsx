import LocalHostMap from "../../utils/LocalHostMap";

export default (noteId) =>
  LocalHostMap.get(`/note/getlikedusers/${noteId}`).then((response) => response.data);