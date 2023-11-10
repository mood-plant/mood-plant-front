import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { postLink } from '../../api/Main/postLink';

export default function MainContent() {
  const [link, setLink] = useState('');
  const [isLinkValid, setIsLinkValid] = useState(true);

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
      await postLink(link);
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
          marginBottom: '160px',
        }}
      >
        웹 사이트 링크를 넣어주세요!
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
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
};
