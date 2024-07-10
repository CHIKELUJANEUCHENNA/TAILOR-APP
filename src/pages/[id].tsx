import React from 'react'
import Image from 'next/image'
import { topSellingProducts, pantProducts, vintageProducts } from './store'
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Icons from '@/components/Icons';

const StyledProdductDetail = styled.div`
display: flex;
gap: 20px;

`
function ProductDetails() {
  const products = [...topSellingProducts, ...vintageProducts, ...pantProducts] 
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <StyledProdductDetail>
        <Image src={product.image} alt='img' width={685} height={705} />
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <div>
              <p>3.9</p>
              <p>See all 260 reviews</p>
            </div>
            <p>Color</p>
            <p>Size guide</p>
            <div>
              <button>XXS</button>
            </div>
            <button><Icons type='cart' />Add To Cart</button>
        </div>
    </StyledProdductDetail>
  )
}

export default ProductDetails