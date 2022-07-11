import React, { Component } from "react";
import Background from "../../assets/img/back3.jpg";
// import { connect } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

class ProductList extends Component {
  render() {
    // const { products } = this.props;
    const productList = [].length ? (
      [].map((product: any) => {
        return (
          <div
            className="product-list col-lg-3 col-md-4 col-sm-6"
            key={product.productId}
          >
            <Image
              className="show list"
              // the way of access to the public folder url not to use directly
              src={process.env.PUBLIC_URL + product.imageUrl}
              alt={product.title}
            />
            <br />
            <span className="name"> {product.title} </span>
            <h4 className="price btn btn-danger active">{product.price}</h4>
            <Link href="" passHref>
              <p className="click btn btn-info">Click to get</p>
            </Link>
          </div>
        );
      })
    ) : (
      <div> There&apos;s no products yet </div>
    );
    return (
      <React.Fragment>
        <Navbar />
        <div className="wrapper">
          <Sidebar />
          <div className="product-bg" id="content">
            <div id="content">
              <div className="row">
                <div className="back col-sm-12">
                  <Image src={Background} />
                </div>
                {productList}
              </div>
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//   };
// };

export default ProductList; // connect(mapStateToProps)(ProductList);
