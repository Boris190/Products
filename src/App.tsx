import React from "react";
import ProductGrid from "./components/ProductGrid";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Our Products</h1>
      </header>
      <main>
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;
