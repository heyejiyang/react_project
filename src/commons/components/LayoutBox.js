import styled from 'styled-components';
import { color } from '../../styles/Color';

const { dark } = color; //분리함

export const OuterBox = styled.div`
  max-width: 900px;
  min-width: 700px;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px ${dark};
  margin: 50px auto;
`; //모듈 여러개 정의할거같으면 default말고 이렇게
//가운데 배치 margin
