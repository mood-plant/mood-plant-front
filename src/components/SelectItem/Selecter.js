import styled from "styled-components";
import React, { useState } from "react";
import icon from "../../assets/SelectItem/icon.png";

export default function Selecter({ setPlants, plants, data }) {
  const [age, setAge] = useState("0");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const selectedAmount = event.target.value;
    setAge(selectedAmount);

    const plantIndex = plants.findIndex((plant) => plant.id === data.id);

    if (plantIndex !== -1) {
      const updatedPlants = [...plants];
      updatedPlants[plantIndex] = { ...data, amount: selectedAmount };
      setPlants(updatedPlants);
    } else {
      setPlants([...plants, { ...data, amount: selectedAmount }]);
    }
  };

  const num_list = Array.from({ length: 10 }, (el, i) => {
    return i + 1;
  });

  return (
    <Container onClick={() => setOpen(!open)} open={open ? "true" : "false"}>
      {open ? (
        <MenuItem>
          {num_list.map((num) => (
            <Item key={num} value={num} onClick={handleChange}>
              {num}
            </Item>
          ))}
        </MenuItem>
      ) : (
        <>
          {age} <Icon src={icon} />
        </>
      )}
    </Container>
  );
}

const Icon = styled.img`
  width: 22px;
  margin-right: -10px;
  margin-left: 2px;
`;

const Container = styled.div`
  width: 60;
  height: 47px;
  background: #1a4346;
  border-radius: 20px;
  color: white;
  padding: 10px 18px;
  height: auto;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => (props.open === "true" ? "absolute" : "relative")};
  right: ${(props) => (props.open === "true" ? "10px" : "")};
  bottom: ${(props) => (props.open === "true" ? "10px" : "")};
`;

const Item = styled.button`
  margin: 0;
  background: none;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
