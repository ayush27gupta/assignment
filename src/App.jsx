import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/searchbar/Searchbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Searchbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
