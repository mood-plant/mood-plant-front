import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  themeKeywords,
  voiceToneKeywords,
  spaceConditionKeywords,
} from "../../constants/keyword";
import { useEffect, useState } from "react";
import { putTags } from "../../api/checkResult/putTags";
import { getResult } from "../../api/checkResult/getResult";
import Header from "../Common/Header";
import { plants } from "../../constants/plants";

function convertToKorean(topPlants, voiceToneKeywords, themeKeywords) {
  // Function to get Korean equivalent for a keyword
  const getKoreanEquivalent = (keyword, keywordsArray) => {
    const foundKeyword = keywordsArray.find((item) => item.en === keyword);
    return foundKeyword ? foundKeyword.ko : keyword;
  };

  // Convert theme and voice for each plant
  return topPlants.map((plant) => ({
    ...plant,
    voice: plant.voice.map((voiceKeyword) =>
      getKoreanEquivalent(voiceKeyword, voiceToneKeywords)
    ),
    theme: plant.theme.map((themeKeyword) =>
      getKoreanEquivalent(themeKeyword, themeKeywords)
    ),
  }));
}

function findTopMatchingPlants(data, plants, topN = 10) {
  // Combine all keywords from data
  const combinedKeywords = [
    ...data.characters,
    ...data.keywords,
    ...data.recommendThemes,
  ];

  // Function to count overlaps
  const countOverlaps = (plant) => {
    const plantKeywords = [
      ...plant.voice,
      ...plant.theme,
      ...(Array.isArray(plant.keyword) ? plant.keyword : []),
    ];
    return combinedKeywords.reduce(
      (count, keyword) => (plantKeywords.includes(keyword) ? count + 1 : count),
      0
    );
  };

  // Map each plant with its overlap count
  const plantWithOverlapCount = plants.map((plant) => ({
    plant,
    overlap: countOverlaps(plant),
  }));

  // Sort the plants by overlap count in descending order
  plantWithOverlapCount.sort((a, b) => b.overlap - a.overlap);

  // Return the top N plants
  return plantWithOverlapCount.slice(0, topN).map((item) => item.plant);
}

export default function Content() {
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.url;

  const [originData, setOriginData] = useState({
    keywords: [],
    characters: [],
    recommendThemes: [],
  });

  useEffect(() => {
    const getData = async () => {
      // const data = await getResult(url);

      const data = {
        characters: ["Professional", "Elegant", "Confident"],
        keywords: ["Small Spaces", "Large Spaces", "Minimalist Decor"],
        recommendThemes: ["Christmas Cheer"],
      };

      setOriginData({
        keywords: data.keywords,
        characters: data.characters,
        recommendThemes: data.recommendThemes,
      });
    };

    if (url) {
      getData();
    }
  }, [url]);

  const findKeywordObjectByEnglish = (englishKeyword, keywordsArray) => {
    const keywordObject = keywordsArray.find((k) => k.en === englishKeyword);

    return keywordObject;
  };

  const [selectedKeywords, setSelectedKeywords] = useState(
    originData.keywords.map(
      (k) => findKeywordObjectByEnglish(k, spaceConditionKeywords) || {}
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

  useEffect(() => {
    setSelectedKeywords(
      originData.keywords.map(
        (k) => findKeywordObjectByEnglish(k, spaceConditionKeywords) || {}
      )
    );
    setSelectedCharacters(
      originData.characters.map(
        (k) => findKeywordObjectByEnglish(k, voiceToneKeywords) || {}
      )
    );
    setSelectedThemes(
      originData.recommendThemes.map(
        (k) => findKeywordObjectByEnglish(k, themeKeywords) || {}
      )
    );
  }, [originData]);

  console.log("originData", originData);
  console.log("selectedKeywords", selectedKeywords);
  console.log("selectedCharacters", selectedCharacters);

  console.log(selectedKeywords, selectedCharacters, selectedThemes);
  const [keywordError, setKeywordError] = useState("");
  const [themeError, setThemeError] = useState("");

  const sendApiRequest = async (data) => {
    const url = await putTags(data);

    navigate("/selectItem", {
      state: {
        url: url,
      },
    });
  };

  const handleKeywordsChange = (event, value) => {
    setSelectedKeywords(value);
    setKeywordError(value.length ? "" : "하나 이상 필수로 선택해주세요.");
  };

  const handleThemesChange = (event, value) => {
    if (value.length > 2) {
      setThemeError("테마는 2개 이상 추가할 수 없습니다.");
    } else {
      setSelectedThemes(value);
      setThemeError("");
    }
  };

  const handleSubmit = () => {
    if (!selectedKeywords.length) {
      setKeywordError("하나 이상 필수로 선택해주세요.");
      return;
    } else {
      setKeywordError("");
    }

    if (selectedThemes.length > 2) {
      setThemeError("테마는 2개 이상 추가할 수 없습니다.");
      return;
    } else {
      setThemeError("");
    }

    const topPlants = findTopMatchingPlants(originData, plants, 10);

    const convertedPlants = convertToKorean(
      topPlants,
      voiceToneKeywords,
      themeKeywords
    );
    const result = [];

    convertedPlants.map((e) => {
      result.push({
        name: e.ko,
        price: Math.floor(Math.random() * (50 - 10 + 1) + 10) * 1000, // Random number between 10,000 and 50,000 with last three digits as zero
        description: e.voice[0],
        image: e.image,
      });
    });
    console.log(result);

    navigate("/selectItem", {
      state: {
        url: {
          guides: result,
          themeProducts: [
            {
              name: "빨간화분",
              price: Math.floor(Math.random() * (50 - 10 + 1) + 10) * 1000, // Random number between 10,000 and 50,000 with last three digits as zero
              description: "크리스마스",
              image: "https://vl-media.s3.us-west-1.amazonaws.com/1.jpg",
            },
            {
              name: "회색화분",
              price: Math.floor(Math.random() * (50 - 10 + 1) + 10) * 1000, // Random number between 10,000 and 50,000 with last three digits as zero
              description: "크리스마스",
              image: "https://vl-media.s3.us-west-1.amazonaws.com/2.jpg",
            },
            {
              name: "리스",
              price: Math.floor(Math.random() * (50 - 10 + 1) + 10) * 1000, // Random number between 10,000 and 50,000 with last three digits as zero
              description: "가을 장식",
              image: "https://vl-media.s3.us-west-1.amazonaws.com/3.jpg",
            },
            {
              name: "전구장식",
              price: Math.floor(Math.random() * (50 - 10 + 1) + 10) * 1000, // Random number between 10,000 and 50,000 with last three digits as zero
              description: "크리스마스",
              image: "https://vl-media.s3.us-west-1.amazonaws.com/4.png",
            },
          ],
        },
      },
    });

    // const payload = {
    //   spaceConditions: selectedKeywords.map((kw) => kw.en),
    //   voiceAndTones: selectedCharacters.map((char) => char.en),
    //   themes: selectedThemes.map((theme) => theme.en),
    // };

    // sendApiRequest(payload, url);
  };

  const handleCharactersChange = (event, value) => {
    setSelectedCharacters(value);
  };

  return (
    <>
      <Header number="1" />
      <S.Layout>
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: 700, marginBottom: "10px" }}
        >
          웹 사이트 탐색 완료!
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ fontWeight: 400, marginBottom: "25px", color: "#636363" }}
        >
          목적에 맞게 결과를 수정해주세요.
        </Typography>

        <S.Container>
          <S.Option>
            <S.Label>키워드*</S.Label>
            <Autocomplete
              multiple
              id="tags-keywords"
              options={spaceConditionKeywords}
              getOptionLabel={(option) => option.ko}
              value={selectedKeywords}
              onChange={handleKeywordsChange}
              filterSelectedOptions
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="키워드검색"
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
              id="tags-characters"
              options={voiceToneKeywords}
              getOptionLabel={(option) => option.ko}
              value={selectedCharacters}
              onChange={handleCharactersChange}
              filterSelectedOptions
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="캐릭터검색" />
              )}
            />
          </S.Option>
          <S.Option>
            <S.Label>테마</S.Label>
            <Autocomplete
              multiple
              id="tags-themes"
              options={themeKeywords}
              getOptionLabel={(option) => option.ko}
              value={selectedThemes}
              onChange={handleThemesChange}
              filterSelectedOptions
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="테마검색"
                  error={!!themeError}
                  helperText={themeError}
                />
              )}
            />
          </S.Option>
        </S.Container>

        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{
            height: "55px",
            width: "300px",
            fontSize: "20px",
            marginTop: "25px",
            borderRadius: "20px",
          }}
        >
          수정 완료
        </Button>
      </S.Layout>
    </>
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

    margin-top: 85px;
  `,
};
