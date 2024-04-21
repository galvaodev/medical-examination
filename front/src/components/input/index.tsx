import React from 'react';
import InputMask from 'react-input-mask';
import { inputProps } from './interface';
import * as S from './styles';
import useInput from './useInput';

const Input: React.FC<inputProps> = ({
  onChange,
  label,
  mask,
  name,
  accept,
  maxLength,
  error,
  type = 'input',
}) => {
  const { handleChange } = useInput(onChange);

  return (
    <S.InputContainer>
      <S.WrapperInput>
        {mask ? (
          <InputMask
            mask={mask}
            onChange={handleChange}
            placeholder={mask}
            name={name}
          >
            {(inputProps: any) => <S.InputStyled {...inputProps} type="text" />}
          </InputMask>
        ) : type === 'file' ? (
          <S.InputStyled
            placeholder={label}
            name={name}
            onChange={handleChange}
            type={type}
            accept={accept}
          />
        ) : (
          <S.InputStyled
            placeholder={label}
            name={name}
            maxLength={maxLength}
            onChange={handleChange}
            as={type}
          />
        )}
        <S.ErrorMessage>{error}</S.ErrorMessage>
      </S.WrapperInput>
    </S.InputContainer>
  );
};

export default Input;
