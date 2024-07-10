import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { CartProvider } from './CartContext';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

interface IChildren {
    children?: ReactNode
}
const Layout = ({ children }: IChildren) => {
  return (
    <CartProvider>
      <MainContainer>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </MainContainer>
    </CartProvider>
    
  );
};

export default Layout;
