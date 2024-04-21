import Button from 'components/button';
import Header from 'components/header';
import Input from 'components/input';
import SelectComponent from 'components/select';
import Typhograph from 'components/typhograph';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BsJournalMedical } from 'react-icons/bs';
import * as S from './styles';
import useHome from './useHome';

const Home: React.FC = () => {
  const { register, setValue, handleSubmit } = useForm();
  const { options, handleChange, changeInput, onSubmit, handleNextpage } =
    useHome(setValue, register);

  return (
    <S.Container>
      <Header />
      <S.Information>
        <Typhograph size={30}>
          <BsJournalMedical />
          Dados do Exame
        </Typhograph>

        <Button type="button" name="Ver exames" onClick={handleNextpage} />
      </S.Information>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input onChange={changeInput} label="Nome" name="name" />
        <SelectComponent handleChange={handleChange} options={options} />
        <Input onChange={changeInput} mask="99/99/9999" name="date" />
        <Input
          onChange={changeInput}
          label="Descrição"
          type="textarea"
          name="description"
        />
        <Input
          onChange={changeInput}
          label="Nome"
          type="file"
          name="file"
          accept="image/*"
        />
        <Button type="submit" name="Enviar" />
      </S.Form>
    </S.Container>
  );
};

export default Home;
