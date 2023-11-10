import styled from 'styled-components';

export default function Header() {
  return <S.Header>감성플랜트</S.Header>;
}

const S = {
  Header: styled.header`
    color: #1a4346;
    font-weight: 400;
    display: flex;
    justify-content: flex-start;
    padding-left: 48px;
    padding-top: 48px;
  `,
};
