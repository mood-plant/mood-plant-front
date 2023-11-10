import React from 'react';
import Content from '../components/CheckResult/Content';
import styled from 'styled-components';

export default function CheckResult() {
  return (
    <S.Layout>
      <Content />
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    height: 100vh;
  `,
};
