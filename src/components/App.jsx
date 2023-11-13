import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const noteCollection = notes.map((obj) => {
  return <Note key={obj.key} title={obj.title} content={obj.content} />;
});

function App() {
  return (
    <div>
      <Header />
      <Note />
      {noteCollection}
      <Footer />
    </div>
  );
}

export default App;
