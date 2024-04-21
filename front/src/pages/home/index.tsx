import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/button';
import Header from 'components/header';
import Input from 'components/input';
import SelectComponent from 'components/select';
import Typhograph from 'components/typhograph';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BsJournalMedical } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import * as S from './styles';
import useHome from './useHome';

const schema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  exam: yup.string().required('Selecione um exame'),
  file: yup.string().required('Imagem do exame obrigatória'),
  date: yup.string().required('Informe uma data'),
});

const Home: React.FC = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    options,
    handleChange,
    changeInput,
    onSubmit,
    handleNextpage,
    isLoading,
  } = useHome(setValue, register, reset);

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
      <S.Form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <Input
          onChange={changeInput}
          label="Nome"
          name="name"
          error={errors?.name?.message}
        />
        <SelectComponent
          handleChange={handleChange}
          options={options}
          error={errors?.exam?.message}
        />
        <Input
          onChange={changeInput}
          mask="99/99/9999"
          name="date"
          error={errors?.date?.message}
        />
        <Input
          onChange={changeInput}
          label="Descrição"
          type="textarea"
          name="description"
          maxLength={150}
        />
        <Input
          onChange={changeInput}
          label="Nome"
          type="file"
          name="file"
          error={errors?.file?.message}
          accept="image/*"
        />
        {isLoading && <Typhograph size={20}>Carregando...</Typhograph>}
        <Button type="submit" name="Enviar" />
      </S.Form>
      <ToastContainer />
    </S.Container>
  );
};

export default Home;
