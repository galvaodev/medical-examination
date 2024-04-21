import React from 'react';

import { ITyphograph } from './interfaces';
import * as S from './styles';

const Typhograph: React.FC<ITyphograph> = ({
  children,
  size,
  colors,
  as = 'h1',
}) => {
  return (
    <S.Typhograph as={as} size={size} colors={colors}>
      {children}
    </S.Typhograph>
  );
};

export default Typhograph;
