import React, { Component } from "react";
import open from "../../assets/img/open.jpg";
// import { connect } from "react-redux";
import Link from "next/link";
import Image from "next/image";

class Sidebar extends Component {
  render() {
    // const { categories } = this.props;
    const categoryList = [].length ? (
      [].map((category: any) => {
        return (
          <React.Fragment key={category.productId}>
            <li value={category.name}>
              <Link href="">{category.name}</Link>
            </li>
          </React.Fragment>
        );
      })
    ) : (
      <div> There&apos;s no products yet </div>
    );
    return (
      <React.Fragment>
        <nav id="sidebar">
          <div className="bordering">
            <Image className="side-new" src={open} title="AdminPhoto" alt="" />
            <h3>Mohammed Al-yaseen</h3>
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
                Home
              </Link>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Link href="#">Shaorma</Link>
                </li>
                <li>
                  <Link href="#">Soup</Link>
                </li>
                <li>
                  <Link href="#">Pizza</Link>
                </li>
                <li>
                  <Link href="#">Swiss Pizza</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">About</Link>
              <Link
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                Pages
              </Link>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <Link href="/products/list">Products List</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="#pageSubmenu1"
                data-toggle="collapse"
                aria-expanded="false"
              >
                Food Categories
              </Link>
              <ul className="collapse list-unstyled" id="pageSubmenu1">
                {categoryList}
              </ul>
            </li>
            <li>
              <Link href="#">Profile</Link>
            </li>
            <li>
              <Link href="#">Content Us</Link>
            </li>
          </ul>

          <ul className="list-unstyled CTAs">
            <li>
              <Link href="#">Back href article</Link>
            </li>
          </ul>
          <ul className="list-unstyled CTAs">
            <li>
              <Link href="#"></Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories,
//   };
// };

export default Sidebar; // connect(mapStateToProps)(Sidebar);
