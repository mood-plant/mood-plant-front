import React from 'react';
import MainContent from '../components/Main/MainContent';
import styled from 'styled-components';
import LogoHeader from '../components/Common/LogoHeader';

export default function Main() {
  return (
    <S.Layout>
      <LogoHeader />
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
