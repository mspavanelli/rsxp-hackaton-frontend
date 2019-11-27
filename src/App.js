import React from "react";
import "./App.css";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CodeConsole from "./components/CodeConsole";
import FunctionList from "./components/FunctionList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FunctionList />
        <Dashboard />
        <CodeConsole />
      </main>
    </div>
  );
}

export default App;
