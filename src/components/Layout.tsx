import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

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
    <MainContainer>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
