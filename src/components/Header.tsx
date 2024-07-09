import styled from 'styled-components';
import Navbar from './Navbar';
import Icons from './Icons';

const ContainerDisplay = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
`;
const HeaderContainer = styled.header`
  background-color: #160632;
  padding: 20px 60px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: 20px;
    cursor: pointer;
  }
`;

const HorizontalRule = styled.hr`
  border: 0;
  height: 1px;
  background: #CBCAD3;
  margin: 10px 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ContainerDisplay>
        <Icons type='logo' />
        <IconsContainer>
          <Icons type='cart' />
          <Icons type='notification' />
          <Icons type='user' />
        </IconsContainer>
      </ContainerDisplay>
      <HorizontalRule />
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
