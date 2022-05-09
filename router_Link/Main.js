import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <h3>안녕하세요 메인페이지입니다.</h3>
      <ul>
        <Link to="/product/1">
          <li>1번상품</li>
        </Link>
        <Link to="/post/1">
          <li>2번상품</li>
        </Link>
      </ul>
    </div>
  );
}
export default Main;
