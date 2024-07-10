import styled from "styled-components";
import { useCart } from "@/components/CartContext";
import Image from "next/image";
import Icons from "@/components/Icons";
import { useRouter } from "next/router";

const CartContainer = styled.div`
  padding: 30px;
  h1 {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 32px;
    color: #183864;
  }
  p {
font-family: 'Poppins';
font-weight: 600;
font-size: 20px;
color: #183864;
  }
  .overview {
    display: flex;
    width: 100%
    justify-content: space-between;
  }
  .display {
    display: flex;
    gap: 30px;
  }
  .btn {
    border: none;
    background: transparent;
  }
  .order {
background: #EBEBEB;
border-radius: 8px;
padding: 20px;
width: 100%;
  }
  .checkout {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
width: 530px;
height: 70px;
background: #712F79;
border-radius: 8px;
color: #fff;
border: none;
font-family: 'Poppins';
font-weight: 500;
font-size: 24px;
color: #FCFCFC;
  }
`;

const CartItem = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="overview">
          {cart.map((item) => (
            <CartItem key={item.id}>
              <hr />
              <div className="display">
                <Image src={item.image} alt="img" width={229} height={235} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.color}</p>
                  <p>${item.price}</p>
                </div>
                <button className="btn" onClick={() => removeFromCart(item.id)}>
                  X
                </button>
              </div>
            </CartItem>
          ))}
          <div className="order">
            <p>Order summary</p>
            <div>
              <p>Subtotal</p>
            </div>
            <button className="checkout" onClick={() => router.push('/checkout')}>
              <Icons type="checkout" /> Checkout
            </button>
          </div>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
