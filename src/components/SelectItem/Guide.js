import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import PlantCard from "./PlantCard";
import { useNavigate } from "react-router-dom";

export default function Guide({ guide, theme }) {
  const [expanded, setExpanded] = React.useState(false);
  const [plants, setPlants] = React.useState([]);
  const [themes, setThemes] = React.useState([]);

  const navigate = useNavigate();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = () => {
    localStorage.setItem("guide", JSON.stringify(plants));
    localStorage.setItem("theme", JSON.stringify(themes));
    navigate("/credit");
  };

  React.useEffect(() => {
    if (plants.length > 0) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [plants]);

  const accordionStyle = {
    width: "93%",
    marginTop: "15px",
    borderRadius: "15px",
    border: "1px solid #AFAFAF",
    paddingTop: "5px",
    paddingBottom: "5px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{
          ...accordionStyle,
          borderTopLeftRadius: "15px",
          borderBottomLeftRadius: "15px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "195px",
              paddingTop: "5px",
              paddingBottom: "5px",
              flexShrink: 0,
              fontWeight: "700",
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            플랜테리어 가이드
          </Typography>
          {plants.reduce((acc, cur) => acc + cur.amount, 0) > 0 && (
            <Typography
              sx={{
                color: "black",
                fontSize: "20px",
                width: "110px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                marginLeft: "auto",
                borderRadius: "10px",
                border: "2px solid #1A4346",
                background: "rgba(26, 67, 70, 0.30)",
                marginRight: "10px",
              }}
            >
              {plants.reduce((acc, cur) => acc + Number(cur.amount), 0)}개 선택
            </Typography>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <CardContainer>
            {guide.map((item) => (
              <PlantCard
                name={item.name}
                price={item.price}
                img={item.image}
                description={item.description}
                setPlants={setPlants}
                plants={plants}
                data={item}
              />
            ))}
          </CardContainer>
        </AccordionDetails>
      </Accordion>
      {plants.reduce((acc, cur) => acc + Number(cur.amount), 0) > 0 && (
        <>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            style={{
              ...accordionStyle,
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  width: "120px",
                  flexShrink: 0,
                  fontWeight: "700",
                  fontSize: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                테마 상품
              </Typography>
              {themes.reduce((acc, cur) => acc + Number(cur.amount), 0) > 0 && (
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    width: "110px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    marginLeft: "auto",
                    borderRadius: "10px",
                    border: "2px solid #1A4346",
                    background: "rgba(26, 67, 70, 0.30)",
                    marginRight: "10px",
                  }}
                >
                  {themes.reduce((acc, cur) => acc + Number(cur.amount), 0)}개
                  선택
                </Typography>
              )}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <CardContainer>
                  {theme &&
                    theme.map((item) => (
                      <PlantCard
                        name={item.name}
                        price={item.price}
                        img={item.image}
                        description={item.description}
                        setPlants={setThemes}
                        plants={themes}
                        data={item}
                      />
                    ))}
                </CardContainer>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Button onClick={handleClick}>확인</Button>
        </>
      )}
    </div>
  );
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-left: 18px;
  margin-right: 18px;
`;

const Button = styled.button`
  width: 300px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #fff;
  background: #1a4346;
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 62px;
  cursor: pointer;
  margin-bottom: 5rem;
`;
