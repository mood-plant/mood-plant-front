import { Typography } from '@mui/material';
import styled from 'styled-components';
import googleImage from '../../assets/Complete/google.png';
import appStoreImage from '../../assets/Complete/appStore.png';
import plantImage from '../../assets/Complete/plant.png';

export default function Content() {
  return (
    <S.Layout>
      <Typography
        variant='h4'
        component='h4'
        sx={{ fontWeight: 700, marginBottom: '10px' }}
      >
        결제완료
      </Typography>
      <Typography
        variant='subtitle1'
        component='div'
        sx={{ fontWeight: 400, marginBottom: '25px', color: '#636363' }}
      >
        구매하신 상품을 모두 어플리케이션에 등록했습니다.
      </Typography>

      <S.Container>
        <Typography
          variant='subtitle1'
          component='h2'
          sx={{ fontWeight: 700, fontSize: '20px' }}
        >
          어플을 다운받아 보다 효율적으로 관리해보세요!
        </Typography>

        <div>
          <img src={googleImage} alt='구글스토어' width='150px' height='50px' />
          <img
            src={appStoreImage}
            alt='애플스토어'
            width='150px'
            height='48px'
          />
        </div>

        <S.Plants>
          <img src={plantImage} alt='식물' width='200px' height='300px' />
          <img src={plantImage} alt='식물' width='200px' height='300px' />
          <img src={plantImage} alt='식물' width='200px' height='300px' />
          <img src={plantImage} alt='식물' width='200px' height='300px' />
        </S.Plants>
      </S.Container>
    </S.Layout>
  );
}

const S = {
  Container: styled.div`
    width: 60%;
    border-radius: 20px;
    border: 1px solid #afafaf;
    background: rgba(255, 255, 255, 0.8);

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;

    padding: 3%;
  `,

  Layout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    margin-top: 5%;
  `,

  Plants: styled.div`
    display: flex;
    gap: 30px;

    margin-top: 10px;
  `,
};
