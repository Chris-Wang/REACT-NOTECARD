import React from "react";
import NotePage from "../../app/Page/components/NotePage";
import ProductPage from "../../app/Page/components/ProductPage";
import ExplorePage from "../../app/Page/components/ExplorePage";
import { Link, BrowserRouter, Route } from "react-router-dom";

// const data = { noteId: this.props.noteId, userId: this.props.userId };

const Root = (data) => (
  <BrowserRouter>
    <div className="pages">
      {/* <NotePage noteId={data.noteId} userId={data.userId} />
    <ProductPage noteId={data.noteId} userId={data.userId} /> */}
      {/* <ExplorePage noteId={data.noteId} userId={data.userId} /> */}
      <Route path="/" component={ExplorePage} />
      {/* <Route path="/users" component={UsersPage} /> */}
    </div>
  </BrowserRouter>
);

export default Root;
