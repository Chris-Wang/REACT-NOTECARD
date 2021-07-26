import LocalHostMap from "../../utils/LocalHostMap";
// let config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
//     "Access-Control-Allow-Headers":
//       "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
//   },
// };
export default (noteId) =>
  LocalHostMap.get(`/note/${noteId}`).then((response) => response.data);
