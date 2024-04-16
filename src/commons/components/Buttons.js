import styled, { css } from 'styled-components';
import { buttonColor } from '../../styles/Color';
import FontSize from '../../styles/FontSize';

const { big } = FontSize;

export const BigButton = styled.button`
  fontsize: ${big};
  height: 45px;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  ${({ color }) =>
    buttonColor[color] &&
    css`
      background: ${buttonColor[color][0]};
      color: ${buttonColor[color][1]};
      border: 1px solid ${buttonColor[color][2]};
    `};
`;
//css스타일 불러서 ??

export const ButtonGroup = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin: 20px auto;

  button {
    width: 0;
    flex-grow: 1;
  }

  button + button {
    margin-left: 5px;
  }
`; //이 내부에 버튼이 있다면 그 버튼 그룹지어서 좌우로 배치될수있도록 width(너비값)가 있으면 px해주고 없으면 100%로
//버튼 사이 간격 주기
//첫번째 버튼 제외 margin left주기
