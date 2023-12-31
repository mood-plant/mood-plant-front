import React from 'react';
import MainContent from '../components/Main/MainContent';
import styled from 'styled-components';

export default function Main() {
  return (
    <S.Layout>
      <MainContent />
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    width: 100%;
    height: 100%;
  `,
};
