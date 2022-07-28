import Image from "next/image";
import Link from "next/link";

interface IProductCardProp {
  product: any;
}

function ProductCard({ product }: IProductCardProp) {
  return (
    <>
      <Image
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
      </Link>
    </>
  );
}

export default ProductCard;
