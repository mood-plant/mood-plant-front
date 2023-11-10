import styled from 'styled-components';
import plant1 from '../../assets/Main/plant1.png';
import plant2 from '../../assets/Main/plant2.png';
import plant3 from '../../assets/Main/plant3.png';
import comment1 from '../../assets/Main/comment1.png';
import comment2 from '../../assets/Main/comment2.png';
import comment3 from '../../assets/Main/comment3.png';

const positions = [
  { top: 0, left: '6%', width: '420px', height: '600px', src: plant1 },
  { top: 50, left: '30%', width: '405px', height: '500px', src: comment1 },
  { top: 500, left: '30%', width: '500px', height: '500px', src: comment3 },
  { top: 350, left: '48%', width: '390px', height: '400px', src: plant2 },
  { top: 200, left: '70%', width: '400px', height: '450px', src: comment2 },
  { top: 40, left: '90%', width: '350px', height: '700px', src: plant3 },
];

export default function Images() {
  return (
    <S.Layout>
      {positions.map((pos, index) => (
        <S.Image
          key={index}
          src={pos.src}
          width={pos.width}
          height={pos.height}
          top={pos.top}
          left={pos.left}
          style={{ borderRadius: '20px' }}
        />
      ))}
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    position: relative;
    min-width: 100%;
    height: 90vh;
  `,
  Image: styled.img`
    position: absolute;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left};
    transform: translateX(-50%);
  `,
};
