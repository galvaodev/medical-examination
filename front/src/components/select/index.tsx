import React from 'react';
import Select from 'react-select';
import { ISelectProps } from './interface';
import * as S from './styles';

const SelectComponent: React.FC<ISelectProps> = ({
  options,
  handleChange,
  error,
}) => {
  return (
    <S.Select>
      <Select
        defaultValue={options[0]}
        options={options}
        placeholder="Selecione um exame..."
        onChange={handleChange}
      />

      <S.ErrorMessage>{error}</S.ErrorMessage>
    </S.Select>
  );
};

export default SelectComponent;
