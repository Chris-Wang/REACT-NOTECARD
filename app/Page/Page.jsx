import React from "react";
import NotePage from "./components/NotePage";

const Page = (data) => (
  <div className="pages">
    <NotePage noteId={data.noteId} userId={data.userId} />
  </div>
);

export default Page;
