import React from 'react';
import InputMask from 'react-input-mask';
import { inputProps } from './interface';
import * as S from './styles';

const Input: React.FC<inputProps> = ({
  onChange,
  value,
  label,
  mask,
  name,
  accept,
  type = 'input',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        onChange(base64String.split(',')[1], e.target.name);
      };

      reader.readAsDataURL(file);
    } else {
      onChange(e.target.value, e.target.name);
    }
  };
  return (
    <S.InputContainer>
      <S.WrapperInput>
        {mask ? (
          <InputMask
            mask={mask}
            value={value}
            onChange={handleChange}
            placeholder={mask}
            name={name}
          >
            {(inputProps: any) => <S.InputStyled {...inputProps} type="text" />}
          </InputMask>
        ) : type === 'file' ? (
          <S.InputStyled
            value={value}
            placeholder={label}
            name={name}
            onChange={handleChange}
            type={type}
            accept={accept}
          />
        ) : (
          <S.InputStyled
            value={value}
            placeholder={label}
            name={name}
            onChange={handleChange}
            as={type}
          />
        )}
      </S.WrapperInput>
    </S.InputContainer>
  );
};

export default Input;
