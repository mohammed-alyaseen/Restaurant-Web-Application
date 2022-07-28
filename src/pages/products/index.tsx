import React, { Component } from "react";
import Background from "../../../public/assets/img/back3.jpg";
// import { connect } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import ProductCard from "@/components/productCard/ProductCard";

class ProductList extends Component {
  render() {
    // const { products } = this.props;
    const products = [
      {
        productId: 1,
        title: "Shawarma",
        price: "100",
        imageUrl: "/assets/img/Shawarma.jpg",
        categoryId: 2,
      },
      {
        productId: 2,
        title: "Soup",
        price: "50",
        imageUrl: "/assets/img/Soup.jpg",
        categoryId: 2,
      },
      {
        productId: 3,
        title: "Swiss Pizza",
        price: "200",
        imageUrl: "/assets/img/Swiss Pizza.jpg",
        categoryId: 2,
      },
      {
        productId: 4,
        title: "Pizza",
        price: "150",
        imageUrl: "/assets/img/Pizza.jpg",
        categoryId: 2,
      },
      {
        productId: 5,
        title: "Sushi",
        price: "200",
        imageUrl: "/assets/img/Sushi.jpg",
        categoryId: 2,
      },
    ];
    const productList = products.length ? (
      products.map((product: any) => {
        return (
          <div
            className="product-list col-lg-3 col-md-4 col-sm-6"
            key={product.productId}
          >
            <ProductCard product={product} />
          </div>
        );
      })
    ) : (
      <div> There&apos;s no products yet </div>
    );
    return (
      <>
        <Navbar />
        <div className="wrapper">
          <Sidebar />
          <div className="product-bg" id="content">
            <div id="content">
              <div className="row">
                <div className="profile-image col-sm-12">
                  <Image src={Background} alt="" />
                </div>
                {productList}
              </div>
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//   };
// };

export default ProductList; // connect(mapStateToProps)(ProductList);
