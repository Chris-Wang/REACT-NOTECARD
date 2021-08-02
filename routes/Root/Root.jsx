import React from "react";
import NotePage from "../../app/Page/components/NotePage";
import ProductPage from "../../app/Page/components/ProductPage";
import ExplorePage from "../../app/Page/components/ExplorePage";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

// const data = { noteId: this.props.noteId, userId: this.props.userId };

const Root = (data) => (
  <Router>
    <div className="pages">
      {/* <NotePage noteId={data.noteId} userId={data.userId} />
    <ProductPage noteId={data.noteId} userId={data.userId} /> */}
      {/* <ExplorePage noteId={data.noteId} userId={data.userId} /> */}

      {/* <Route path="/users" component={UsersPage} /> */}
      <Switch>
        <Route exact path="/" component={ExplorePage} />
        <Route path="/notes/:id" component={NotePage} />
        <Route path="/products/:id" component={ProductPage} />
      </Switch>
      {/* <Route component={Notfound} /> */}
    </div>
  </Router>
);

export default Root;
