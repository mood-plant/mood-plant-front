import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
import Selecter from "./Selecter";

export default function PlantCard({
  name,
  price,
  img,
  description,
  setPlants,
  plants,
  data,
}) {
  return (
    <Card
      sx={{
        maxWidth: 270,
        borderRadius: "20px",
        border: "2px solid #B9B9B9",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="230" image={img} alt="plant image" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontSize: "22px",
              fontWeight: 700,
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            style={{
              fontSize: "22px",
              color: "#1A4346",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {price}원
          </Typography>
          <Container>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontSize: "20px",
                color: "#1A4346",
                border: "2px solid #BABABA",
                borderRadius: "20px",
                width: "150px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {description}
            </Typography>
            <Selecter setPlants={setPlants} plants={plants} data={data} />
          </Container>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
