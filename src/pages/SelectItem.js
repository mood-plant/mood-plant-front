import Header from '../components/Common/Header';
import styled from 'styled-components';
import Guide from '../components/SelectItem/Guide';
import plant from '../assets/SelectItem/plant.png';
import { getGuide } from '../api/Select/getGuide';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SelectItem = () => {
  // const location = useLocation();
  // const url = location.state?.url;
  // const [data, setData] = useState([]);
  // const selectItemData = async () => {
  //   try {
  //     const res = await getGuide();
  //     setData(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   selectItemData();
  // }, []);

  const data = {
    guides: [
      {
        id: 1,
        name: '산세베리아',
        price: 25000,
        description: '온습도유지',
        image: plant,
      },
      {
        id: 2,
        name: '가문비나무',
        price: 25000,
        description: '온습도유지',
        image: plant,
      },
      {
        id: 1,
        name: '산세베리아',
        price: 25000,
        description: '온습도유지',
        image: plant,
      },
      {
        id: 2,
        name: '가문비나무',
        price: 25000,
        description: '온습도유지',
        image: plant,
      },
      {
        id: 1,
        name: '산세베리아',
        price: 25000,
        description: '온습도유지',
        image: plant,
      },
      {
        id: 2,
        name: '가문비나무',
        price: 25000,
        description: '온습도유지',
        image: plant,
      },
      {
        id: 1,
        name: '산세베리아',
        price: 25000,
        description: '온습도유지',
        image: plant,
      },
      {
        id: 2,
        name: '가문비나무',
        price: 25000,
        description: '온습도유지',
        image: plant,
      },
    ],
    themeProducs: [
      {
        id: 1,
        name: '산타 모자',
        price: 25000,
        description: '원목과 어울림',
        image: plant,
      },
      {
        id: 2,
        name: '트리 장식',
        price: 25000,
        description: '원목과 어울림',
        image: plant,
      },
      {
        id: 2,
        name: '별 모양',
        price: 25000,
        description: '원목과 어울림',
        image: plant,
      },
      {
        id: 2,
        name: '양말 장식',
        price: 25000,
        description: '원목과 어울림',
        image: plant,
      },
      {
        id: 2,
        name: '열매 장식',
        price: 25000,
        description: '원목과 어울림',
        image: plant,
      },
      {
        id: 2,
        name: '산세베리아',
        price: 25000,
        description: '원목과 어울림',
        image: plant,
      },
    ],
  };

  return (
    <S.Container>
      <Header number='2' />
      <S.Title>무드를 바꿀 새로운 플랜테리어를 제안합니다.</S.Title>
      <S.Summary>목적에 맞게 결과를 수정해주세요.</S.Summary>
      <Guide guide={data.guides} theme={data.themeProducs} />
      {data.length > 0 && (
        <Guide guide={data.guides} theme={data.themeProducs} />
      )}
    </S.Container>
  );
};

const S = {
  Title: styled.h1`
    font-size: 36px;
    margin-top: 85px;
  `,
  Summary: styled.p`
    color: #636363;
    font-size: 18px;
  `,
  Container: styled.div`
    background-color: #dbe3de;
  `,
};

export default SelectItem;
