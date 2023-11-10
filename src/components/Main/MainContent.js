import { Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { postLink } from '../../api/Main/postLink';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards';
import Images from './Images';
import Loading from '../Common/Loading';
import LogoHeader from '../Common/LogoHeader';

export default function MainContent() {
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeLink = (event) => {
    setLink(event.target.value);
  };

  const onSendUrl = async () => {
    setIsLoading(true);

    const url = await postLink(link);

    setIsLoading(false);

    navigate('/checkResult', {
      state: {
        url: url,
      },
    });
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      await onSendUrl();
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <LogoHeader />

          <S.Layout>
            <Typography
              variant='h3'
              component='h3'
              sx={{
                fontWeight: 700,
                marginBottom: '10px',
              }}
            >
              내 공간을 더 특별하게
            </Typography>
            <Typography
              variant='subtitle1'
              component='div'
              sx={{ fontWeight: 500, marginBottom: '100px' }}
            >
              감성플랜트는 당신의 공간에 최적화된 조경식물들을 제안합니다.
              <br />
              플렌테리어를 통해 공간을 업그레이드하고 더 많은 방문객들을
              모으세요.
            </Typography>

            <S.URL>
              <S.InputWrapper>
                <input
                  type='text'
                  placeholder='https://beanbrothers.com'
                  value={link}
                  onChange={onChangeLink}
                  onKeyPress={handleKeyPress}
                  style={{
                    width: '640px',
                    borderRadius: '20px',
                    border: '2px solid #808080',
                    background: '#FAFAFA',
                    height: '60px',
                    outline: 0,
                    fontSize: '20px',
                    paddingLeft: '20px',
                  }}
                />

                <button
                  onClick={onSendUrl}
                  style={{
                    height: '60px',
                    marginLeft: '23px',
                    width: '200px',
                    fontSize: '20px',
                    borderRadius: '20px',
                    background: '#1A4346',
                    outline: 0,
                    border: '2px solid #1A4346',
                    color: 'white',
                  }}
                >
                  시작하기
                </button>
              </S.InputWrapper>
            </S.URL>
            <Images />
            <S.CardLayout>
              <Cards />
            </S.CardLayout>
          </S.Layout>
        </>
      )}
    </>
  );
}

const S = {
  Layout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 100px;
  `,

  CardLayout: styled.div`
    margin-top: 45px;
  `,

  InputWrapper: styled.div`
    display: flex;
    align-items: center;
  `,

  URL: styled.div`
    display: flex;
    height: '50px';
    flex-direction: column;
    margin-bottom: 20px;
  `,
};
