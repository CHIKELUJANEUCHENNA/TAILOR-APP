import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;

const StyledImage = styled(Image)`
  /* flex: 1; 
  max-width: 100%;
  height: auto;  */
  /* object-fit: cover; */
`;

const Home = () => {
  return (
    <div>
      <ImageContainer>
        <StyledImage 
          src="/img/img-intro.png" 
          alt="img" 
          width={736} 
          height={1192} 
          // layout="responsive"
        />
        <StyledImage 
          src="/img/img-intro-2.png" 
          alt="img" 
          width={992} 
          height={1192} 
          // layout="responsive" 
        />
      </ImageContainer>
    </div>
  );
};

export default Home;
