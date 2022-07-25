import React, { Component } from "react";
import Open from "../../../public/assets/img/open.jpg";
// import { connect } from "react-redux";
import Link from "next/link";
import Image from "next/image";

class Sidebar extends Component {
  render() {
    // const { categories } = this.props;
    const categories = [
      {
        id: 1,
        name: "Vegetables",
      },
      {
        id: 2,
        name: "FastFood",
      },
      {
        id: 3,
        name: "Drinks",
      },
    ];
    const categoryList = categories.length ? (
      categories.map((category: any) => {
        return (
          <li value={category.name} key={category.id}>
            <Link href="">{category.name}</Link>
          </li>
        );
      })
    ) : (
      <div> There&apos;s no products yet </div>
    );
    return (
      <>
        <nav id="sidebar">
          <div className="bordering">
            <Image className="side-new" src={Open} title="AdminPhoto" alt="" />
            <h3>TuhMoh</h3>
            <p id="index-title">
              If you are hungry, You have the right site for you <br /> (^_^)
            </p>
          </div>
          <div className="sidebar-header"></div>
          <ul className="list-unstyled components">
            <p>Welcome in you</p>
            <li className="active">
              <Link
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <a>Home</a>
              </Link>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Link href="#">
                    <a>Shaorma</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Soup</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Pizza</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Swiss Pizza</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">
                <a>About</a>
              </Link>
              <Link
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <a>Pages</a>
              </Link>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <Link href="/products/list">
                    <a>Products List</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="#pageSubmenu1"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <a>Food Categories</a>
              </Link>
              <ul className="collapse list-unstyled" id="pageSubmenu1">
                {categoryList}
              </ul>
            </li>
            <li>
              <Link href="#">
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Content Us</a>
              </Link>
            </li>
          </ul>

          <ul className="list-unstyled CTAs">
            <li>
              <Link href="#">
                <a>Back href article</a>
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled CTAs">
            <li>
              <Link href="#">test</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories,
//   };
// };

export default Sidebar; // connect(mapStateToProps)(Sidebar);
