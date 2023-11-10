import React from 'react';
import Content from '../components/CheckResult/Content';
import Header from '../components/Common/Header';
import styled from 'styled-components';

export default function CheckResult() {
  return (
    <S.Layout>
      <Header number='1' />
      <Content />
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    height: 100vh;
  `,
};
