import React from "react";
import PictureList from "./Components/PictureList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        This app will show you an exciting new image every day directly from NASA! 
        Have fun 🚀!
      </p>
      <PictureList />
    </div>
  );
}
export default App;
