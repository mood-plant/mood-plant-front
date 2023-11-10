import loading from "../assets/Loading/loading.gif";
import styled from "styled-components";
import Logo from "../assets/Header/logo.png";

const Loading = () => {
  return (
    <>
      <GIF
        src={Logo}
        style={{ width: "100px", position: "absolute", top: 30, left: 30 }}
      />
      <Container>
        <GIF src={loading} />
        <Text>분석중입니다...</Text>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
`;

const GIF = styled.img`
  width: 400px;
`;
const Text = styled.p`
  color: #1a4346;
  font-size: 22px;
  font-weight: 600;
  margin-top: -90px;
`;

export default Loading;
