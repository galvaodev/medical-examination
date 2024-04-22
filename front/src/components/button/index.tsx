import React from 'react';

import { IButton } from './interfaces';
import * as S from './styles';

const Button: React.FC<IButton> = ({ type, name, onClick }) => {
  return (
    <S.Button onClick={onClick} type={type} teste-id="button">
      {name}
    </S.Button>
  );
};

export default Button;
