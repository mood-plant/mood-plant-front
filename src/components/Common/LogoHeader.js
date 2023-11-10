import logo from '../../assets/Header/logo.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function LogoHeader() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <>
      <S.Container>
        <S.Logo src={logo} onClick={navigateHome} />
      </S.Container>
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
    padding-top: 30px;
  `,
  Logo: styled.img`
    width: 120px;
    cursor: pointer;
  `,
};
