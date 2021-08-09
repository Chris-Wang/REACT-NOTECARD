import LocalHostMap from "../../utils/LocalHostMap";

export default (noteId) =>
  LocalHostMap.get(`/note/notecomments/${noteId}`).then(
    (response) => response.data
  );
