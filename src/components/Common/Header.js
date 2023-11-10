import styled from 'styled-components';
import right from '../../assets/Header/right.png';
import close from '../../assets/Header/close.png';
import logo from '../../assets/Header/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Header({ number }) {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <>
      <S.Container>
        <S.Logo src={logo} onClick={navigateHome} />
        {number !== '0' && (
          <>
            <S.ProgressContainer>
              <S.Progress highlight={number === '1'}>결과 확인</S.Progress>
              <S.Arrow src={right} />
              <S.Progress highlight={number === '2'}>상품 선택</S.Progress>
              <S.Arrow src={right} />
              <S.Progress highlight={number === '3'}>확인 및 결제</S.Progress>
            </S.ProgressContainer>
            <S.Close src={close} onClick={navigateHome} />
          </>
        )}
      </S.Container>
      {number !== '0' && <S.Line />}
    </>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 10px;
  `,
  Logo: styled.img`
    width: 120px;
    cursor: pointer;
  `,
  Line: styled.div`
    width: 100vw;
    height: 1px;
    background-color: #a6c3b1;
    margin-top: 10px;
  `,
  ProgressContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  Progress: styled.p`
    color: ${(props) => (props.highlight ? '#000000' : '#888888')};
    font-weight: ${(props) => (props.highlight ? 700 : 400)};
    text-decoration: ${(props) => (props.highlight ? 'underline' : 'none')};
    font-size: 20px;
  `,
  Arrow: styled.img`
    width: 29.16px;
  `,
  Close: styled.img`
    width: 30px;
    padding-left: 90px;
    cursor: pointer;
  `,
};
