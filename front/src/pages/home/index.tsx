import React from 'react';
import Select from 'react-select';

import Input from 'components/input';
import * as S from './styles';
import useHome from './useHome';

const Home: React.FC = () => {
  const { handleChange, options, changeInput } = useHome();
  return (
    <S.Container>
      <S.Form>
        <Input onChange={changeInput} label="Nome" />
        <S.Select>
          <Select
            options={options}
            placeholder="Selecione um exame..."
            onChange={handleChange}
          />
        </S.Select>
        <Input onChange={changeInput} mask="99/99/9999" />
        <Input onChange={changeInput} label="Descrição" type="textarea" />
      </S.Form>
    </S.Container>
  );
};

export default Home;
