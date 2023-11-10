import Header from "../components/Common/Header";
import styled from "styled-components";
import Result from "../components/Credit/Result";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Credit = () => {
  const guide = JSON.parse(localStorage.getItem("guide"));
  const theme = JSON.parse(localStorage.getItem("theme"));
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <Container>
      <Header number="3" />
      <S.Title>확인 및 결제</S.Title>
      <S.Summary>목적에 맞게 결과를 수정해주세요.</S.Summary>
      <Result guide={guide} theme={theme} />
      <Button onClick={() => navigate("/complete")}>확인</Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: #dbe3de;
`;

const S = {
  Title: styled.h1`
    font-size: 36px;
    margin-top: 85px;
  `,
  Summary: styled.p`
    color: #636363;
    font-size: 18px;
    margin-bottom: 35px;
  `,
  Container: styled.div`
    background-color: #dbe3de;
  `,
};

const Button = styled.button`
  width: 300px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #fff;
  background: #1a4346;
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 62px;
  cursor: pointer;
  margin-bottom: 5rem;
`;

export default Credit;
