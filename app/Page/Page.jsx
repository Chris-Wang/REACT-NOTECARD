import React from "react";
import NotePage from "./components/NotePage";

const Page = (noteId) => (
  <div className="pages">
    <NotePage noteId={noteId} />
  </div>
);

export default Page;
