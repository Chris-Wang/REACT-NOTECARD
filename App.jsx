import React from "react";
import Header from "./app/Header";
import Page from "./app/Page";
import Footer from "./app/Footer";
import Root from "./routes/Root";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExplorePage from "./app/Page/components/ExplorePage";
import NotePage from "./app/Page/components/NotePage";
import ProductPage from "./app/Page/components/ProductPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "3d9a9030-c1b9-4091-b91e-ffac9231fed3",
      noteId: "1",
    };

    this.handleIdChange = this.handleIdChange.bind(this);
  }

  handleIdChange(newId) {
    this.setState({
      noteId: newId,
    });
  }

  render() {
    const { noteId, userId } = this.state;
    console.log(this.state.noteId, "noteid in app");
    console.log(this.state.userId, "userid in app");
    return (
      <Router>
        <div className="main">
          <Root noteId={noteId} userId={userId} />
        </div>
      </Router>
    );
  }
}

export default App;
