import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/productCard.module.css";

interface IProductCardProp {
  product: any;
}

function ProductCard({ product }: IProductCardProp) {
  return (
    <>
      {/* <Image
        className="show list"
        src={product.imageUrl}
        alt={product.title}
        width={300}
        height={300}
      />
      <br />
      <span className="title"> {product.title} </span>
      <h4 className="price-btn btn btn-danger active">{product.price}</h4>
      <Link href="" passHref>
        <p className="click btn btn-info">Click to get</p>
      </Link> */}
      {/* <div className="col-sm-6 col-md-6 col-lg-4"> */}
      <div className={styles.foodCard}>
        <div className={styles.foodCard_img}>
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={300}
            height={250}
          />
          <Link href="#!" passHref>
            <i className="far fa-heart"></i>
          </Link>
        </div>
        <div className={styles.foodCard_content}>
          <div className={styles.foodCard_titleSection}>
            <Link href="#!">{product.title}</Link>
            {/* <Link href="#!" className={styles.foodCard_author}>
              Burger
            </Link> */}
          </div>
          <div className={styles.foodCard_bottomSection}>
            <div className={styles.spaceBetween}>
              {/* <div>
                <span className="fa fa-fire"></span> 220 - 280 Kcal
              </div> */}
              {/* <div className="pull-right">
                <span className="badge badge-success">Veg</span>
              </div> */}
            </div>
            <hr />
            <div className={styles.spaceBetween}>
              <div className={styles.foodCard_price}>{product.price}$</div>
              <div className={styles.foodCard_orderCount}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-secondary minus-btn"
                      type="button"
                      id="button-addon1"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control input-manulator"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    value="0"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary add-btn"
                      type="button"
                      id="button-addon1"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default ProductCard;
