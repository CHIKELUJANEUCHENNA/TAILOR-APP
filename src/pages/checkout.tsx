import Icons from "@/components/Icons";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  padding: 30px;
  gap: 30px;
  @media (max-width: 480px) {
    flex-direction: column;
    > :first-child {
      order: 2;
      width: 100%;
    }
  }
`;
const ProductDetails = styled.div`
  background: #712f79;
  border-radius: 8px;
  padding: 40px;
  width: 100%;
  color: #fff;
  p {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 20px;
    color: #fcfcfc;
  }
`;
const ContactInfo = styled.div`
  width: 100%;
  p {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 24px;
    color: #012436;
  }
  label {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 24px;
    color: #183864;
  }
  input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 100%;
    height: 60px;
    border: 1px solid #b5b3b3;
    border-radius: 8px;
  }
  .shipping {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .city {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
  }
`;
const PayButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #5e2764;
  border-radius: 8px;
  color: #fff;
  width: 249px;
  height: 60px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 20px;
  color: #fafafa;
  border: none;
`;
const DetailsSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Details = styled.div`
  display: flex;
  gap: 20px;
`;

function Checkout() {
  return (
    <Container>
      <ContactInfo>
        <p>Contact information</p>
        <label>Email address</label>
        <input type="text" />
        <p>Payment details</p>
        <label>Card number</label>
        <input type="text" />
        <div className="city">
          <div>
            <label>Expiration date (MM/YY)</label>
            <input type="date" />
          </div>
          <div>
            <label>Cvc</label>
            <input type="text" />
          </div>
        </div>
        <p>Shipping address</p>
        <label>Address</label>
        <input type="text" />
        <div className="city">
          <div>
            <label>City</label>
            <input type="text" />
          </div>
          <div>
            <label>State/Province</label>
            <input type="text" />
          </div>
          <div>
            <label>Postal code</label>
            <input type="text" />
          </div>
        </div>
        <p>Billing information</p>
        <label>Same as shipping address</label>
        {/* <input type="checkbox" /> */}
        <hr
          style={{
            margin: "30px 0",
          }}
        />
        <div className="shipping">
          <PayButton>Pay Now</PayButton>
          <p>
            Or{" "}
            <span
              style={{
                fontWeight: 600,
                fontSize: "20px",
                color: "#4B1F50",
              }}
            >
              Continue Shopping{" "}
            </span>
            <Icons type="arrow" />
          </p>
        </div>
      </ContactInfo>
      <ProductDetails>
        <p>Amount due</p>
        <p style={{ fontSize: "32px" }}>$328</p>
        <DetailsSection>
          <Details>
            <Image src="/img/check1.png" alt="" width={157} height={156} />
            <div>
              <p>Brown Leather Shirt</p>
              <p style={{ fontWeight: 400 }}>Brown M</p>
              <p>$75</p>
            </div>
          </Details>

          <p>$315</p>
        </DetailsSection>
        <hr />
        <DetailsSection>
          <Details>
            <Image src="/img/check2.png" alt="" width={157} height={156} />
            <div>
              <p>Brown Leather Shirt</p>
              <p style={{ fontWeight: 400 }}>Brown M</p>
              <p>$75</p>
            </div>
          </Details>

          <p>$315</p>
        </DetailsSection>
        <hr />
        <DetailsSection>
          <Details>
            <Image src="/img/check3.png" alt="" width={157} height={156} />
            <div>
              <p>Brown Leather Shirt</p>
              <p style={{ fontWeight: 400 }}>Brown M</p>
              <p>$75</p>
            </div>
          </Details>

          <p>$315</p>
        </DetailsSection>
        <hr />
        <DetailsSection>
          <p style={{ fontWeight: 400 }}>Sub Total</p>
          <p>$328</p>
        </DetailsSection>
        <DetailsSection>
          <p style={{ fontWeight: 400 }}>Shipping</p>
          <p>$25</p>
        </DetailsSection>
        <DetailsSection>
          <p style={{ fontWeight: 400 }}>Taxes</p>
          <p>$38</p>
        </DetailsSection>
        <hr />
        <DetailsSection>
          <p>Total</p>
          <p>$391</p>
        </DetailsSection>
      </ProductDetails>
    </Container>
  );
}

export default Checkout;
