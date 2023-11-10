import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  themeKeywords,
  voiceToneKeywords,
  plantConditionKeywords,
} from '../../constants/keyword';
import { useState } from 'react';
import { putTags } from '../../api/checkResult/putTags';

export default function Content() {
  const navigate = useNavigate();
  // const location = useLocation();
  // const url = location.state.url;
  // const url =

  const originData = {
    keywords: ['Low Light Tolerant'],
    characters: ['Energetic', 'Professional'],
    recommendThemes: ['Spring Renewal', 'Winter Solace'],
  };

  const findKeywordObjectByEnglish = (englishKeyword, keywordsArray) => {
    const keywordObject = keywordsArray.find((k) => k.en === englishKeyword);

    return keywordObject;
  };

  const [selectedKeywords, setSelectedKeywords] = useState(
    originData.keywords.map(
      (k) => findKeywordObjectByEnglish(k, plantConditionKeywords) || {}
    )
  );

  const [selectedCharacters, setSelectedCharacters] = useState(
    originData.characters.map(
      (k) => findKeywordObjectByEnglish(k, voiceToneKeywords) || {}
    )
  );

  const [selectedThemes, setSelectedThemes] = useState(
    originData.recommendThemes.map(
      (k) => findKeywordObjectByEnglish(k, themeKeywords) || {}
    )
  );

  console.log(selectedKeywords, selectedCharacters, selectedThemes);
  const [keywordError, setKeywordError] = useState('');
  const [themeError, setThemeError] = useState('');

  const sendApiRequest = async (data) => {
    const url = await putTags(data);

    navigate('/selectItem', {
      state: {
        url: url,
      },
    });
  };

  const handleKeywordsChange = (event, value) => {
    setSelectedKeywords(value);
    setKeywordError(value.length ? '' : '하나 이상 필수로 선택해주세요.');
  };

  const handleThemesChange = (event, value) => {
    if (value.length > 2) {
      setThemeError('테마는 2개 이상 추가할 수 없습니다.');
    } else {
      setSelectedThemes(value);
      setThemeError('');
    }
  };

  const handleSubmit = () => {
    if (!selectedKeywords.length) {
      setKeywordError('하나 이상 필수로 선택해주세요.');
      return;
    } else {
      setKeywordError('');
    }

    if (selectedThemes.length > 2) {
      setThemeError('테마는 2개 이상 추가할 수 없습니다.');
      return;
    } else {
      setThemeError('');
    }

    const payload = {
      keywords: selectedKeywords.map((kw) => kw.en),
      characters: selectedCharacters.map((char) => char.en),
      themes: selectedThemes.map((theme) => theme.en),
    };

    sendApiRequest(payload);
  };

  const handleCharactersChange = (event, value) => {
    setSelectedCharacters(value);
  };

  return (
    <S.Layout>
      <Typography
        variant='h4'
        component='h4'
        sx={{ fontWeight: 700, marginBottom: '10px' }}
      >
        웹 사이트 탐색 완료!
      </Typography>
      <Typography
        variant='subtitle1'
        component='div'
        sx={{ fontWeight: 400, marginBottom: '25px', color: '#636363' }}
      >
        목적에 맞게 결과를 수정해주세요.
      </Typography>

      <S.Container>
        <S.Option>
          <S.Label>키워드*</S.Label>
          <Autocomplete
            multiple
            id='tags-keywords'
            options={plantConditionKeywords}
            getOptionLabel={(option) => option.ko}
            value={selectedKeywords}
            onChange={handleKeywordsChange}
            filterSelectedOptions
            sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='키워드검색'
                error={!!keywordError}
                helperText={keywordError}
              />
            )}
          />
        </S.Option>
        <S.Option>
          <S.Label>캐릭터</S.Label>
          <Autocomplete
            multiple
            id='tags-characters'
            options={voiceToneKeywords}
            getOptionLabel={(option) => option.ko}
            value={selectedCharacters}
            onChange={handleCharactersChange}
            filterSelectedOptions
            sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField {...params} placeholder='캐릭터검색' />
            )}
          />
        </S.Option>
        <S.Option>
          <S.Label>테마</S.Label>
          <Autocomplete
            multiple
            id='tags-themes'
            options={themeKeywords}
            getOptionLabel={(option) => option.ko}
            value={selectedThemes}
            onChange={handleThemesChange}
            filterSelectedOptions
            sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='테마검색'
                error={!!themeError}
                helperText={themeError}
              />
            )}
          />
        </S.Option>
      </S.Container>

      <Button
        onClick={handleSubmit}
        variant='contained'
        color='primary'
        sx={{
          height: '55px',
          width: '300px',
          fontSize: '20px',
          marginTop: '25px',
        }}
      >
        수정 완료
      </Button>
    </S.Layout>
  );
}

const S = {
  Container: styled.div`
    width: 40%;
    border-radius: 20px;
    border: 1px solid #afafaf;
    background: rgba(255, 255, 255, 0.8);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 60px;

    padding: 5%;
  `,

  Option: styled.div`
    width: 90%;
  `,

  Label: styled.div`
    display: flex;
    justify-content: flex-start;
  `,
  Layout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    margin-top: 2%;
  `,
};
