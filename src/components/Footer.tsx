import React from "react";
import styled from "styled-components";
import Icons from "./Icons";

const FooterContainer = styled.div`
  padding: 30px;
  background: #fafafa;
`;
const Overview = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    > :first-child {
        order: 2;
        width: 100%;
      }
  }
`;
const Bottom = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;
const SubscribeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 155px;
  height: 50px;
  background: #5e2764;
  border-radius: 8px;
  border: none;
  border: 1px solid #fff;
`;
const TextInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  width: 374px;
  height: 50px;
  background: #e3e3e3;
  border-radius: 8px;
  border: none;
`;
const FooterLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #9f42aa;
  }
`;
const FooterInput = styled.div`
  display: flex;
  gap: 20px;
`;

const Partners = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const FooterHead = styled.p`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 24px;
  color: #183864;
`;
const StyledItem = styled.p`
  cursor: pointer;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  color: #183864;
`;
const FooterIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

function Footer() {
  return (
    <FooterContainer>
      <Top>
        <Overview>
          <div>
            <FooterHead>Company</FooterHead>
            <StyledItem>Home</StyledItem>
            <StyledItem>Store</StyledItem>
            <StyledItem>Style</StyledItem>
            <StyledItem>About</StyledItem>
          </div>
          <div>
            <FooterHead>Useful Links</FooterHead>
            <StyledItem>Service center</StyledItem>
            <StyledItem>Delivery Options</StyledItem>
            <StyledItem>Return Policy</StyledItem>
            <StyledItem>Report a Product</StyledItem>
          </div>
          <div>
            <FooterHead>Need Help?</FooterHead>
            <StyledItem>Chat with us</StyledItem>
            <StyledItem>Help center</StyledItem>
            <StyledItem>Contact us</StyledItem>
          </div>
          <div>
            <FooterHead>Legal</FooterHead>
            <StyledItem>Claim</StyledItem>
            <StyledItem>Privacy</StyledItem>
            <StyledItem>Terms</StyledItem>
          </div>
        </Overview>
        <div>
          <FooterLogo>
            <Icons type="logo-blue" />
            <p>With Love From Africa</p>
          </FooterLogo>
          <div>
            <FooterHead>New to Maedu?</FooterHead>
            <StyledItem>
              Subscribe to our newsletter to get latest update on our offers.
            </StyledItem>
            <FooterInput>
              <TextInput type="text" placeholder="Enter your email" />
              <SubscribeButton style={{ color: "#fff" }}>
                Subscribe
              </SubscribeButton>
            </FooterInput>
          </div>
        </div>
      </Top>
      <Bottom>
        <div>
          <FooterHead>Payment Options And Delivery Partners</FooterHead>
          <Partners>
            <Icons type="master-card" />
            <Icons type="max" />
            <Icons type="visa" />
            <Icons type="fedEx" />
            <Icons type="dhl" />
          </Partners>
        </div>
        <div>
          <FooterHead>Follow Us</FooterHead>
          <Partners>
            <Icons type="youtube" />
            <Icons type="facebook" />
            <Icons type="instagram" />
            <Icons type="twitter" />
          </Partners>
        </div>
      </Bottom>
      <hr />
      <FooterIcon>
      <Icons type="bottom-icon" />
      </FooterIcon>
    </FooterContainer>
  );
}

export default Footer;
