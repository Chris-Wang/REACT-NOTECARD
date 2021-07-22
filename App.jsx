import React from "react";
import Header from "./app/Header";
import Page from "./app/Page";
import Footer from "./app/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      noteId: "1",
    };

    this.handleIdChange = this.handleIdChange.bind(this);
  }

  handleIdChange(newId) {
    this.setState({
      noteId: newId,
    });

    //？为什么这里会延后
    //    console.log(this.state.noteId, "noteid");
  }

  render() {
    const noteId = this.state.noteId;
    console.log(this.state.noteId, "noteid in app");
    return (
      <div className="main">
        <div className="container">
          <Header handeleIdChange={this.handleIdChange} />
          <Page noteId={noteId} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
