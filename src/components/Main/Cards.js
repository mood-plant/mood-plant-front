import { Typography } from '@mui/material';
import styled from 'styled-components';
import card1 from '../../assets/Main/card1.png';
import card2 from '../../assets/Main/card2.png';
import card3 from '../../assets/Main/card3.png';

export default function Cards() {
  return (
    <S.Template>
      <S.Card>
        <S.Img src={card1} alt='첫번째 카드' width='100%' />
        <S.Conetnt>
          <S.Tilte>
            <Typography
              variant='h4'
              component='h4'
              sx={{
                fontWeight: 800,
              }}
            >
              1
            </Typography>
            <Typography
              variant='h4'
              component='h4'
              sx={{
                fontWeight: 800,
              }}
            >
              브랜드, 공간에 맞는 플랜테리어
            </Typography>
          </S.Tilte>

          <S.LineWrapper>
            <S.Line />
          </S.LineWrapper>

          <S.Text>
            <S.Content>
              당신의 브랜드 웹사이트, 공간 정보를 입력하면 그에 꼭맞는
              플렌테리어를 추천드립니다. 스위트룸부터 스파에 이르기까지,
              여러분의 공간의 우아함을 강조해보세요. 세련되고 독특한 식물들
              활용해 모든 손님의 체류를 호사스러운 경험으로 만들어보세요.
            </S.Content>
          </S.Text>
        </S.Conetnt>
      </S.Card>

      <S.Card>
        <S.Img src={card2} alt='두번째 카드' width='100%' />
        <S.Conetnt>
          <S.Tilte>
            <Typography
              variant='h4'
              component='h4'
              sx={{
                fontWeight: 800,
              }}
            >
              2
            </Typography>
            <Typography
              variant='h4'
              component='h4'
              sx={{
                fontWeight: 800,
              }}
            >
              인스타그래머블
            </Typography>
          </S.Tilte>

          <S.LineWrapper>
            <S.Line />
          </S.LineWrapper>

          <S.Text>
            <S.Content>
              소셜 미디어 시대에서 미적 감각은 중요합니다. 열대식물 장식으로
              호텔을 인스타그램에서 빼놓을 수 없는 명소로 변신시키세요. 단순한
              장식을 넘어, 플렌테리어는 유행을 선도하는 환경 의식 있는 사람들을
              끌어들이는 효과적인 마케팅 도구랍니다.
            </S.Content>
          </S.Text>
        </S.Conetnt>
      </S.Card>
      <S.Card>
        <S.Img src={card3} alt='세번째 카드' width='100%' />
        <S.Conetnt>
          <S.Tilte>
            <Typography
              variant='h4'
              component='h4'
              sx={{
                fontWeight: 800,
              }}
            >
              3
            </Typography>
            <Typography
              variant='h4'
              component='h4'
              sx={{
                fontWeight: 800,
              }}
            >
              건강한 환경에 대한 약속
            </Typography>
          </S.Tilte>

          <S.LineWrapper>
            <S.Line />
          </S.LineWrapper>

          <S.Text>
            <S.Content>
              녹색 식물을 통해 환경 보호에 대한 여러분의 의지를 표현함으로써,
              환경을 생각하는 손님들의 마음을 사로잡을 수 있습니다. 자연의
              아름다움과 신선한 공기로 고객들의 숙박을 한층 더 풍요롭게
              만들어보세요.
            </S.Content>
          </S.Text>
        </S.Conetnt>
      </S.Card>
    </S.Template>
  );
}

const S = {
  Template: styled.div`
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-direction: column;
  `,
  Img: styled.img`
    position: absolute;
    top: 0;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;

    opacity: 70%;
  `,

  Card: styled.div`
    width: 90%;
    display: flex;
    height: 400px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 50px;
    border: 1px solid #adadad;
    background: rgba(255, 255, 255, 0.4);
    position: relative;
  `,

  Conetnt: styled.div`
    padding: 0 3%;
    margin-top: 35px;
  `,
  Tilte: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
  LineWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,

  Line: styled.div`
    width: 20%;
    height: 1px;
    background-color: #1a4346;
    margin: 20px 0;
  `,

  Text: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
  Content: styled.div`
    width: 40%;
  `,
};
