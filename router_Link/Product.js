import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Product(props) {
  const productId = useParams().productId;
  const location = useLocation();
  return (
    <div>
      <h3>{productId}번 상품 페이지 입니다.</h3>
      <ul>
        <li>hash : {location.hash}</li>
        <li>pathname : {location.pathname}</li>
        <li>search : {location.search}</li>
        <li>state : {location.state}</li>
        <li>key : {location.key}</li>
      </ul>
    </div>
  );
}
export default Product;
