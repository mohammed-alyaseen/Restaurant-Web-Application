import React from "react";
import Navbar from "@/components/navbar/Navbar";

const ProductForm = () => {
  return (
    // <nav-bar></nav-bar>
    <React.Fragment>
      <Navbar />
      <form className="form">
        <h2 className="form-title">Add Product</h2>
        <div className="form-border">
          <input
            className="form-control"
            name="Title"
            type="text"
            placeholder="Title"
            autoComplete="false"
          />
          <input
            className="form-control"
            name="Price"
            type="text"
            placeholder="Price"
          />
          <label htmlFor="Category">Categories :</label>
          <select
            id="Category"
            className="form-control"
            style={{ marginBottom: "20px" }}
            name="CategoryId"
          >
            <option value=""></option>
          </select>
          <input
            className="form-control"
            name="ImageUrl"
            type="text"
            autoComplete="off"
            placeholder="ImageUrl"
          />
          <input
            className="btn btn-danger  btn-block"
            type="submit"
            value="Insert"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default ProductForm;
