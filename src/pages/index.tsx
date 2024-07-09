import Image from "next/image";
import router from "next/router";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;

const DiscoverButton = styled.button`
  position: absolute;
  border: 2px solid #012436;
  border-radius: 5px;
  background-color: transparent;
  padding: 10px 20px;
  font-size: 20px;
  width: 300px;
  height: 80px;
  cursor: pointer;
  z-index: 1;
`;

const Home = () => {
  return (
    <div>
      <ImageContainer>
        <DiscoverButton onClick={() => router.push('/store')}>Discover</DiscoverButton>
        <StyledImage src="/img/img-intro.png" alt="img" width={736} height={1192} />
        <StyledImage src="/img/img-intro-2.png" alt="img" width={992} height={1192} />
      </ImageContainer>
    </div>
  );
};

export default Home;
