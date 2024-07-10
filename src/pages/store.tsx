import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Icons from "@/components/Icons";
import router from "next/router";


const Intro = styled.div`
  p {
    font-family: "Lora";
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    color: #183864;
  }
  h1 {
    font-family: "Lora";
    font-style: normal;
    font-weight: 700;
    font-size: 144px;
    color: #183864;
  }
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  width: 100%;
`;
const Favourite = styled.div`
  display: flex;
  /* background: #fafafa; */
  border-radius: 15px;
  background: #00000020;
`;

const ProductCard = styled.div`
  padding: 10px;
  width: 300px;
  height: 364px;
  text-align: left;
`;
const ViewButton = styled.button`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 28px;
  color: #883992;
  background: none;
  border: none;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
const Display = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 32px;
    color: #183864;
  }
`;
const ProductName = styled.h2`
  margin: 10px 0;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 24px;
  color: #183864;
`;
const IntroIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const ProductPrice = styled.p`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 20px;
  color: #183864;
`;
const ProductColor = styled.p`
  font-size: 16px;
  color: #333;
`;

export const topSellingProducts = [
  {
    id: 1,
    name: "Brown Leather Shirt",
    price: "$400",
    image: "/img/top1.png",
    color: "Brown",
  },
  {
    id: 2,
    name: "Afriture Vintage",
    price: "$99",
    image: "/img/top2.png",
    color: "Black",
  },
  {
    id: 3,
    name: "Pant",
    price: "$75",
    image: "/img/top3.png",
    color: "Gray",
  },
  {
    id: 4,
    name: "Pant",
    price: "$120",
    image: "/img/top4.png",
    color: "Fiesta Jean",
  },
];
export const vintageProducts = [
  {
    id: 5,
    name: "Limpopo Vintage",
    price: "$160",
    image: "/img/shirt1.png",
    color: "Combo",
  },
  {
    id: 6,
    name: "Jonkoso Vintage",
    price: "$55",
    image: "/img/shirt2.png",
    color: "White/Nevy Blue",
  },
  {
    id: 7,
    name: "Afriture Vintage",
    price: "$99",
    image: "/img/shirt3.png",
    color: "Black",
  },
  {
    id: 8,
    name: "Fire/Ash Vintage Shirt",
    price: "$85",
    image: "/img/shirt4.png",
    color: "Gray",
  },
];
export const pantProducts = [
  {
    id: 9,
    name: "Pant",
    price: "$80",
    image: "/img/pant1.png",
    color: "Vanilla White",
  },
  {
    id: 10,
    name: "Pant",
    price: "$100",
    image: "/img/pant2.png",
    color: "Combat Green",
  },
  {
    id: 11,
    name: "Pant",
    price: "$99",
    image: "/img/pant3.png",
    color: "Afriture Combat",
  },
  {
    id: 12,
    name: "Pant",
    price: "$85",
    image: "/img/pant4.png",
    color: "Ninja Cargo",
  },
];
function store() {
  return (
    <>
      <Intro>
        <p>Be A Star</p>
        <h1>Rock Maedu</h1>
        <IntroIcon>
          <Image src="/img/angle.png" alt="intro" width={1064} height={493} />
        </IntroIcon>
      </Intro>
      <div>
        <Display>
          <p>Top Selling Items</p>
          <ViewButton>View All</ViewButton>
        </Display>
        <ProductsContainer>
          {topSellingProducts.map((product, i) => (
            <ProductCard key={product.id} onClick={() => router.push(`/${product.id}`)}>
              <Favourite>
                <ProductImage src={product.image} alt={product.name} />
                <Icons type="favourite" />
              </Favourite>
              <ProductName>{product.name}</ProductName>
              <ProductColor>{product.color}</ProductColor>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductsContainer>
      </div>
      <div>
        <Display>
          <p>Vintage Shirts</p>
          <ViewButton>View All</ViewButton>
        </Display>
        <ProductsContainer>
          {vintageProducts.map((product, i) => (
            <ProductCard key={product.id} onClick={() => router.push(`/${product.id}`)}>
              <Favourite>
                <ProductImage src={product.image} alt={product.name} />
                <Icons type="favourite" />
              </Favourite>
              <ProductName>{product.name}</ProductName>
              <ProductColor>{product.color}</ProductColor>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductsContainer>
      </div>
      <div>
        <Display>
          <p>Pant Collections</p>
          <ViewButton>View All</ViewButton>
        </Display>
        <ProductsContainer>
          {pantProducts.map((product, i) => (
            <ProductCard key={product.id} onClick={() => router.push(`/${product.id}`)}>
              <Favourite>
                <ProductImage src={product.image} alt={product.name} />
                <Icons type="favourite" />
              </Favourite>
              <ProductName>{product.name}</ProductName>
              <ProductColor>{product.color}</ProductColor>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductsContainer>
      </div>
    </>
  );
}

export default store;
