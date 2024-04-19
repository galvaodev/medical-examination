import React from 'react';
import InputMask from 'react-input-mask';
import { inputProps } from './interface';
import * as S from './styles';

const Input: React.FC<inputProps> = ({
  onChange,
  value,
  label,
  mask,
  type = 'input',
}) => {
  return (
    <S.InputContainer>
      <S.WrapperInput>
        {mask ? (
          <InputMask
            mask={mask}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={mask}
          >
            {(inputProps: any) => <S.InputStyled {...inputProps} type="text" />}
          </InputMask>
        ) : (
          <S.InputStyled
            value={value}
            placeholder={label}
            onChange={(e) => onChange(e.target.value)}
            as={type}
          />
        )}
      </S.WrapperInput>
    </S.InputContainer>
  );
};

export default Input;
