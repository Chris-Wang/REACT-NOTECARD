import LocalHostMap from "../../utils/LocalHostMap";

export default (noteId) => LocalHostMap.get(`/notes/${noteId}`).then((response) => response.data);