import styled from "styled-components";
import right from "../../assets/Header/right.png";
import close from "../../assets/Header/close.png";
import logo from "../../assets/Header/logo.png";

export default function Header({ number }) {
  return (
    <S.Container>
      <S.Logo src={logo} />
      <S.ProgressContainer>
        <S.Progress highlight={number === "1"}>결과 확인</S.Progress>
        <S.Arrow src={right} />
        <S.Progress highlight={number === "2"}>상품 선택</S.Progress>
        <S.Arrow src={right} />
        <S.Progress highlight={number === "3"}>확인 및 결제</S.Progress>
      </S.ProgressContainer>
      <S.Close src={close} />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 48px;
  `,
  Logo: styled.img`
    width: 120px;
  `,
  ProgressContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  Progress: styled.p`
    color: ${(props) => (props.highlight ? "#000000" : "#888888")};
    font-weight: ${(props) => (props.highlight ? 700 : 400)};
    text-decoration: ${(props) => (props.highlight ? "underline" : "none")};
    font-size: 20px;
  `,
  Arrow: styled.img`
    width: 29.16px;
  `,
  Close: styled.img`
    width: 30px;
    padding-left: 90px;
  `,
};
