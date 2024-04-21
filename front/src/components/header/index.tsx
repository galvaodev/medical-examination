import React from 'react';
import { IoMdMedical } from 'react-icons/io';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <IoMdMedical />
    </S.Container>
  );
};

export default Header;
