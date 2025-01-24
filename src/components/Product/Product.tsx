import "./styles.css";
import { ProductProps } from "./types";

function Product({ productName = "Unknown", productPrice }: ProductProps) {
  return (
    <div className="product-wrapper">
      <h3>{productName}</h3>
      {/* Пример тернарного оператора для скрытия элемента div, если цена не была передана */}
      {/* {productPrice !== undefined ? <div>{productPrice} $</div> : null} */}
      {/* Пример использования оператора условного рендеринга - && */}
      {productPrice !== undefined && <div>{productPrice} $</div>}
    </div>
  );
}

export default Product;
