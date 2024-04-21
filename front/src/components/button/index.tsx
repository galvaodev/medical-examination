import React from 'react';

import { IButton } from './interfaces';
import * as S from './styles';

const Button: React.FC<IButton> = ({ type, name, onClick }) => {
  return (
    <S.Button onClick={onClick} type={type}>
      {name}
    </S.Button>
  );
};

export default Button;
