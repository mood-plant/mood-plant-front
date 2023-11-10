import styled from "styled-components";
import appLogo from "../../assets/Credit/appLogo.png";
import arrow from "../../assets/Credit/down.png";

const Service = () => {
  return (
    <Container>
      <BG>
        <Header>
          <Logo src={appLogo} />
          <Title>플랜테리어 3개월 관리 서비스</Title>
          <Plus>추가 +</Plus>
        </Header>
        <Summary>
          3개월 동안 습도관리 시스템소프트웨어를 통해 효율적으로 관리하세요.
        </Summary>
        <More>
          더 알아보기 <DecreasArrow src={arrow} />
        </More>
      </BG>
    </Container>
  );
};

const DecreasArrow = styled.img`
  width: 30px;
  transform: rotate(270deg);
`;

const More = styled.h3`
  color: #057a83;
  display: flex;
  justify-content: flex-start;
  padding-left: 115px;
  margin-top: 10px;
  align-items: center;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 30px;
`;

const Plus = styled.h2`
  color: #057a83;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 40px;
`;

const Title = styled.h2`
  margin-right: auto;
  margin-left: 22px;
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Summary = styled.p`
  color: #636363;
  display: flex;
  justify-content: flex-start;
  padding-left: 115px;
  margin-top: 0;
  margin-bottom: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const BG = styled.div`
  width: 80%;
  height: 190px;
  border-radius: 50px;
  border: 1px solid #8a8a8a;
  background: rgba(232, 232, 232, 0.4);
`;

export default Service;
