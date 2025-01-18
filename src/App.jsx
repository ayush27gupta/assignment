import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/searchbar/Searchbar";
import Sidebar from "./components/sidebar/Sidebar";
import Table from "./components/table/Table";

const App = () => {
  const [count, setCount] = useState(0);

  const data = [
    {
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: {
        type: "text",
        value: "BitScale Evaluation - Account relevant",
        icon: "/load.svg",
      },
      enrichCompany: "BitScale Evaluation - Account relevant",
      enrichIcon: "fas fa-check-circle",
    },
    {
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: {
        type: "error",
        value: "cell data size exceeds limit",
        icon: "/warn.svg",
      },
      enrichCompany: "BMW Evaluation - Relevancy check",
      enrichIcon: "fas fa-building",
    },
    {
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: {
        type: "link",
        value: "https://www.linkedin.com/bitScale",
        icon: "/link.svg",
      },
      enrichCompany: "Google Evaluation - Lilevancy check",
      enrichIcon: "fas fa-industry",
    },
  ];

  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Searchbar />
            <Table data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
