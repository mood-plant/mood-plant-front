import React from 'react';
import Content from '../components/Complete/Content';
import Header from '../components/Common/Header';
import styled from 'styled-components';

export default function Complete() {
  return (
    <S.Layout>
      <Header number='3' />
      <Content />
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    height: 100vh;
  `,
};
