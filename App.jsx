import React from "react";
import Header from "./app/Header";
import Page from "./app/Page";
import Footer from "./app/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "9ff24091-a6bb-41fd-9d09-d7129f18e9f2",
      noteId: "1",
    };

    this.handleIdChange = this.handleIdChange.bind(this);
  }

  handleIdChange(newId) {
    this.setState({
      noteId: newId,
    });

    // console.log(this.state.noteId, "noteid in app handle");
  }

  render() {
    const { noteId, userId } = this.state;
    console.log(this.state.noteId, "noteid in app");
    console.log(this.state.userId, "userid in app");
    return (
      <div className="main">
        <div className="container">
          <Header handeleIdChange={this.handleIdChange} />
          <Page noteId={noteId} userId={userId} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
