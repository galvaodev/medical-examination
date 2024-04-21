import styled, { css } from 'styled-components';
import { ITyphograph } from './interfaces';

export const Typhograph = styled.p<ITyphograph>`
 ${({colors, size}) => css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: ${size || 16}px;
    line-height: 24px;
    color: ${colors || '#FFF'};
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  `}
`;
