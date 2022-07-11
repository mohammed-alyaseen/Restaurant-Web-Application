import React from "react";
import Link from "next/link";
import Shawarma from "../assets/img/Shawarma.jpg";
import Soup from "../assets/img/Soup.jpg";
import SwissPizza from "../assets/img/Swiss Pizza.jpg";
import Pizza from "../assets/img/Pizza.jpg";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
// import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper home">
        <Sidebar />
        <div className="" id="content">
          {" "}
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Image className="show home" src={Shawarma} alt="Shawarma" />
              <span className="main-image-title">Shawarma</span>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Image className="show home" src={Soup} alt="Soup" />
              <span className="main-image-title">Soup</span>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Image className="show home" src={Pizza} alt="Pizza" />
              <span className="main-image-title">Pizza</span>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Image className="show home" src={SwissPizza} alt="Swiss Pizza" />
              <span className="main-image-title">Swiss Pizza</span>
            </div>

            <div className="col-sm-12">
              <Link href="/products/list">
                <>
                  <i className="main-color btn-primary show-all fa fa-hand-o-right fa-2x"></i>
                  <i className="show-all "> Show All </i>
                  <i className="main-color btn-primary show-all fa fa-hand-o-right fa-2x"></i>
                </>
              </Link>
            </div>
          </div>
          <br />
          <h2>Shawarma</h2>
          <p>
            Shawarma (/ʃəˈwɑːrmə/; Arabic: شاورما‎) is a dish in Middle Eastern
            cuisine consisting of meat cut into thin slices, stacked in a
            cone-like shape, and roasted on a slowly-turning vertical rotisserie
            or spit. Originally made of lamb or mutton, today`&apos;`s shawarma
            may also be chicken, turkey, beef, or veal.[4][5][1] Thin slices are
            shaved off the cooked surface as it continuously rotates.[6][7]
            Shawarma is one of the world`&apos;`s most popular street foods,
            especially in Egypt and the countries of the Levant, the Arabian
            Peninsula, and beyond.[8]
          </p>
          <div className="line"></div>
          <h2>Soup</h2>
          <p>
            Soup is a primarily liquid food, generally served warm or hot (but
            may be cool or cold), that is made by combining ingredients of meat
            or vegetables with stock, or water. Hot soups are additionally
            characterized by boiling solid ingredients in liquids in a pot until
            the flavors are extracted, forming a broth. Soups are similar to
            stews, and in some cases there may not be a clear distinction
            between the two; however, soups generally have more liquid (broth)
            than stews.[1].
          </p>
          <div className="line"></div>
          <h2>Pizza</h2>
          <p>
            Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a savory dish
            of Italian origin consisting of a usually round, flattened base of
            leavened wheat-based dough topped with tomatoes, cheese, and often
            various other ingredients (such as anchovies, mushrooms, onions,
            olives, pineapple, meat, etc.) which is then baked at a high
            temperature, traditionally in a wood-fired oven.[1] A small pizza is
            sometimes called a pizzetta. A person who makes pizza is known as a
            pizzaiolo.
          </p>
          <div className="line"></div>
          <h3>Swiss Pizza </h3>
          <p>
            Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a savory dish
            of Italian origin consisting of a usually round, flattened base of
            leavened wheat-based dough topped with tomatoes, cheese, and often
            various other ingredients (such as anchovies, mushrooms, onions,
            olives, pineapple, meat, etc.) which is then baked at a high
            temperature, traditionally in a wood-fired oven.[1] A small pizza is
            sometimes called a pizzetta. A person who makes pizza is known as a
            pizzaiolo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
