import styled from 'styled-components';
import Rectangle from '../../assets/Main/Rectangle.png';

const positions = [
  { top: 0, left: '5%', width: '420px', height: '600px' },
  { top: 40, left: '90%', width: '350px', height: '700px' },
  { top: 100, left: '30%', width: '305px', height: '300px' },
  { top: 500, left: '30%', width: '300px', height: '300px' },
  { top: 300, left: '50%', width: '220', height: '350px' },
  { top: 200, left: '70%', width: '270', height: '450px' },
];

export default function Images() {
  return (
    <S.Layout>
      {positions.map((pos, index) => (
        <S.Image
          key={index}
          src={Rectangle}
          width={pos.width}
          height={pos.height}
          top={pos.top}
          left={pos.left}
        />
      ))}
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    position: relative;
    min-width: 100%;
    height: 80vh;
  `,
  Image: styled.img`
    position: absolute;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left};
    transform: translateX(-50%);
  `,
};
