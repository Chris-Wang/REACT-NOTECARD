import React from "react";
import NotePage from "../../app/Page/components/NotePage";
import ProductPage from "../../app/Page/components/ProductPage";
import ExplorePage from "../../app/Page/components/ExplorePage";
import ProductListPage from "../../app/Page/components/ProductListPage"
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../../app/Header";
import Footer from "../../app/Footer";

// const data = { noteId: this.props.noteId, userId: this.props.userId };

const Root = () => (
  <Router>
    <div className="container">
      <Header />
      <div className="pages">
        <Switch>
          <Route exact path="/" component={ExplorePage} />
          <Route path="/notes" component={NotePage} />
          <Route path="/products" component={ProductPage} />
          <Route path="/productsList" component={ProductListPage} />
        </Switch>
        {/* <Route component={Notfound} /> */}
      </div>
      <Footer />
    </div>
  </Router>
);

export default Root;
