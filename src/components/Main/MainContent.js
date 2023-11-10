import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { postLink } from '../../api/Main/postLink';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards';
import Images from './Images';

export default function MainContent() {
  const [link, setLink] = useState('');
  const [isLinkValid, setIsLinkValid] = useState(true);
  const navigate = useNavigate();

  const onChangeLink = ({ target }) => {
    setLink(target.value);
    setIsLinkValid(true);
  };

  const isValidUrl = (string) => {
    var res = string.match(
      /(http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    );
    return res !== null;
  };

  const onSendUrl = async () => {
    if (isValidUrl(link)) {
      const url = await postLink(link);

      navigate('/checkResult', {
        state: {
          url: url,
        },
      });
    } else {
      setIsLinkValid(false);
    }
  };

  // Handler for the Enter key press
  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      await onSendUrl();
    }
  };

  return (
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
        플렌테리어를 통해 공간을 업그레이드하고 더 많은 방문객들을 모으세요.
      </Typography>

      <div>
        <TextField
          error={!isLinkValid}
          helperText={!isLinkValid && 'URL 형식으로 작성해주세요'}
          id='outlined-basic'
          variant='outlined'
          placeholder='https://beanbrothers.com'
          value={link}
          onChange={onChangeLink}
          onKeyPress={handleKeyPress}
          sx={{ width: '640px' }}
        />

        <Button
          onClick={onSendUrl}
          variant='contained'
          color='primary'
          sx={{
            height: '55px',
            marginLeft: '23px',
            width: '200px',
            fontSize: '20px',
          }}
        >
          시작하기
        </Button>
      </div>
      <Images />
      <S.CardLayout>
        <Cards />
      </S.CardLayout>
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 45px;
  `,

  CardLayout: styled.div`
    margin-top: 45px;
  `,
};
