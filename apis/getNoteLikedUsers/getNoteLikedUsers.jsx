import LocalHostMap from "../../utils/LocalHostMap";

export default (noteId) =>
  LocalHostMap.get(`/note/likedusers/${noteId}`).then(
    (response) => response.data
  );
