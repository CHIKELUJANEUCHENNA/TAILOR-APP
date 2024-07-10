import React from "react";
import Image from "next/image";
import { topSellingProducts, pantProducts, vintageProducts } from "./store";
import { useRouter } from "next/router";
import styled from "styled-components";
import Icons from "@/components/Icons";

const StyledProdductDetail = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 30px;
  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 24px;
    color: #183864;
  }
  .price {
    font-weight: 600;
    font-size: 20px;
  }
  .reviews {
    font-size: 18px;
    color: #883992;
  }
  .size-btn {
    width: 74px;
    height: 56px;
    border: 1px solid #b5b3b3;
    border-radius: 4px;
    margin: 5px;
  }
  .add {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    background: #712f79;
    border-radius: 8px;
    font-weight: 500;
    font-size: 24px;
    color: #fcfcfc;
    border: none;
    width: 578px;
    height: 70px;
    margin-top: 20px;
  }
`;
const size = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
function ProductDetails() {
  const products = [...topSellingProducts, ...vintageProducts, ...pantProducts];
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <StyledProdductDetail>
      <Image src={product.image} alt="img" width={685} height={705} />
      <div>
        <p>{product.name}</p>
        <p className="price">{product.price}</p>
        <div>
          <p>3.9</p>
          <p className="reviews">See all 260 reviews</p>
        </div>
        <p>Color</p>
        <p className="reviews" style={{ textAlign: "right" }}>
          Size guide
        </p>
        <div>
          {size.map((item, i) => (
            <button key={i} className="size-btn">{item}</button>
          ))}
        </div>
        <button className="add">
          <Icons type="add-cart" />
          Add To Cart
        </button>
      </div>
    </StyledProdductDetail>
  );
}

export default ProductDetails;
