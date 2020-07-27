import React from "react";
import PropTypes from "prop-types";
function ProductsTable(prop) {
  const products = prop.products;
  const proudctsLine = products.map((elt) => (
    <tr>
      <td>{elt.name}</td>
      <td>{elt.price}</td>
      <td>{elt.category}</td>{" "}
    </tr>
  ));
  return (
    <table className="tab">
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
      </tr>
      {proudctsLine}
    </table>
  );
}
ProductsTable.prototype = { products: PropTypes.array };
export default ProductsTable;
