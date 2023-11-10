import { Typography } from '@mui/material';
import styled from 'styled-components';
import googleImage from '../../assets/Complete/google.png';
import appStoreImage from '../../assets/Complete/appStore.png';

export default function Content() {
  return (
    <S.Layout>
      <Typography
        variant='h4'
        component='h4'
        sx={{ fontWeight: 700, marginBottom: '40px' }}
      >
        결제완료
      </Typography>

      <S.Container>
        <Typography
          variant='h5'
          component='h5'
          sx={{ fontWeight: 700, fontSize: '24px' }}
        >
          어플을 다운받아 보다 효율적으로 관리해보세요!
        </Typography>
        <Typography
          variant='subtitle1'
          component='div'
          sx={{ fontWeight: 400, marginBottom: '25px', color: '#636363' }}
        >
          회원가입 과정에서 아래 코드를 입력하면 구매한 상품이 자동으로
          등록됩니다.
        </Typography>

        <Typography
          variant='subtitle2'
          component='div'
          sx={{ fontWeight: 700, fontSize: '40px', marginBottom: '100px' }}
        >
          03198
        </Typography>
        <div>
          <img src={googleImage} alt='구글스토어' width='150px' height='52px' />
          <img
            src={appStoreImage}
            alt='애플스토어'
            width='150px'
            height='50px'
          />
        </div>
      </S.Container>
    </S.Layout>
  );
}

const S = {
  Container: styled.div`
    width: 50%;
    border-radius: 20px;
    border: 1px solid #afafaf;
    background: rgba(255, 255, 255, 0.8);

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;

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
};
