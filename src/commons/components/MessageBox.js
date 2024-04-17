import React from 'react';
import styled, { css } from 'styled-components';
import { color } from '../../styles/Color';
import FontSize from '../../styles/FontSize';

const { small } = FontSize;
const Box = styled.div`
  text-align: center;
  padding: 7px 10px;
  font-size: ${small};
  ${({ color: c }) =>
    c &&
    css`
      color: ${color[c]};
      box-shadow: 1px 1px 4px ${color[c]};
    `}
`;

const MessageBox = ({ messages, color, children }) => {
  messages = messages || [];

  if (children) messages.push(children);

  return (
    <>
      {messages.map((message, i) => (
        <Box key={i} color={color}>
          {message}
        </Box>
      ))}
    </>
  );
};

export default React.memo(MessageBox);
