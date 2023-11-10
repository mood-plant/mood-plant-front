import Header from "../components/Common/Header";
import styled from "styled-components";

const SelectItem = () => {
  return (
    <>
      <Header number="2" />
      <S.Title>무드를 바꿀 새로운 플랜테리어를 제안합니다.</S.Title>
      <S.Summary>목적에 맞게 결과를 수정해주세요.</S.Summary>
    </>
  );
};

const S = {
  Title: styled.h1`
    font-size: 36px;
    margin-top: 85px;
  `,
  Summary: styled.p`
    color: #636363;
    font-size: 20px;
  `,
};

export default SelectItem;
