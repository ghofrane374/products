import React from "react";

import "./App.css";
import ProductsTable from "./ProductsTable/ProductsTable";
import "./App.css";
export default function App() {
  const products = [
    { name: "machine à laver", price: "750dt", category: "Electronics" },
    { name: "four", price: "250dt", catégore: "Electronics" },
    { name: "veste cuir", price: "95dt", category: "clothes" },
    { name: "veste cuir", price: "95dt", category: "clothes" },
    { name: "veste cuir", price: "95dt", category: "clothes" },
    { name: "pantalon", price: "70dt", category: "clothes" },
    { name: "t shirt", price: "30dt", category: "clothes" },
    { name: "veste cuir", price: "40dt", category: "clothes" },
    { name: "refrigateur", price: "500dt", category: "Electronics" },
    { name: "t shirt", price: "20dt", category: "clothes" },
    { name: "chauffage", price: "300dt", category: "Electronics" },
    { name: "machine a laver", price: "700dt", category: "Electronics" },
  ];

  return (
    <div>
      <ProductsTable products={products}></ProductsTable>
    </div>
  );
}
