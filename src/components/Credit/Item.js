import styled from "styled-components";
import arrow from "../../assets/Credit/down.png";

const Item = ({ name, amount, price, setPlants, plants }) => {
  const decreaseAmount = () => {
    const updatedPlants = plants.map((plant) =>
      plant.name === name
        ? { ...plant, amount: Number(plant.amount) - 1 }
        : plant
    );
    setPlants(updatedPlants);
  };

  const increaseAmount = () => {
    const updatedPlants = plants.map((plant) =>
      plant.name === name
        ? { ...plant, amount: Number(plant.amount) + 1 }
        : plant
    );
    setPlants(updatedPlants);
  };

  return (
    <Container>
      <Name>{name}</Name>
      <Amount>
        <DecreaseArrow src={arrow} onClick={decreaseAmount} /> {amount}
        <Arrow src={arrow} onClick={increaseAmount} />
      </Amount>
      <Price>{price * amount}원</Price>
    </Container>
  );
};

const DecreaseArrow = styled.img`
  width: 35px;
  transform: rotate(90deg);
  cursor: pointer;
`;

const Arrow = styled.img`
  width: 35px;
  transform: rotate(270deg);
  cursor: pointer;
`;

const Name = styled.h2`
  width: 300px;
  margin-bottom: 0;
  display: flex;
  justify-content: flex-start;
`;

const Amount = styled.h2`
  width: 110px;
  justify-content: flex-start;
  margin-bottom: 0;
  display: flex;
  align-items: center;
`;

const Price = styled.h2`
  margin-bottom: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 70%;
`;

export default Item;
