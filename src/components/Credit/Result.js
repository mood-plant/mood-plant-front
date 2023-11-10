import styled from "styled-components";
import Item from "./Item";
import Service from "./Service";
import { useState } from "react";

const Result = ({ guide, theme }) => {
  const [guides, setGuides] = useState([...guide]);
  const [themes, setThemes] = useState([...theme]);

  const calculateTotalPrice = (items) => {
    return items.reduce((acc, cur) => {
      if (
        cur.amount !== undefined &&
        cur.price !== undefined &&
        !isNaN(cur.amount) &&
        !isNaN(cur.price)
      ) {
        return acc + cur.amount * cur.price;
      } else {
        return acc;
      }
    }, 0);
  };

  const guide_price = calculateTotalPrice(guide);
  const theme_price = calculateTotalPrice(theme);
  const total_price = guide_price + theme_price;
  return (
    <Container>
      <BG>
        <Header>
          <Title>플랜테리어 3개월 대여</Title>
          <Price>{total_price}원</Price>
        </Header>
        <Line />
        <ItemContainer>
          {guides.map((item) => (
            <Item
              name={item.name}
              amount={item.amount}
              price={item.price}
              setPlants={setGuides}
              plants={guides}
            />
          ))}
          {themes.map((item) => (
            <Item
              name={item.name}
              amount={item.amount}
              price={item.price}
              setPlants={setThemes}
              plants={themes}
            />
          ))}
        </ItemContainer>
        <Service />
      </BG>
    </Container>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 26px;
`;

const Price = styled.h2`
  margin-right: 15%;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const BG = styled.div`
  border-radius: 20px;
  border: 1px solid #afafaf;
  background: rgba(255, 255, 255, 0.8);
  width: 75%;
  height: auto;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 60px;
`;

export default Result;
