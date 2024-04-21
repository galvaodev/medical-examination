import React from 'react';
import Select from 'react-select';
import { ISelectProps } from './interface';
import * as S from './styles';

const SelectComponent: React.FC<ISelectProps> = ({ options, handleChange }) => {
  return (
    <S.Select>
      <Select
        options={options}
        placeholder="Selecione um exame..."
        onChange={handleChange}
      />
    </S.Select>
  );
};

export default SelectComponent;
