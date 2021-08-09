import LocalHostMap from "../../utils/LocalHostMap";

export default (noteId) =>
  LocalHostMap.get(`/note/collectedusers/${noteId}`).then(
    (response) => response.data
  );
