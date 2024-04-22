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
          data-testid="name-input"
          error={errors?.name?.message}
        />
        <SelectComponent
          handleChange={handleChange}
          options={options}
          data-testid="exam-select"
          error={errors?.exam?.message}
        />
        <Input
          onChange={changeInput}
          mask="99/99/9999"
          name="date"
          data-testid="date-input"
          error={errors?.date?.message}
        />
        <Input
          onChange={changeInput}
          label="Descrição"
          type="textarea"
          name="description"
          data-testid="description-input"
          maxLength={150}
        />
        <Input
          onChange={changeInput}
          label="Nome"
          type="file"
          name="file"
          error={errors?.file?.message}
          accept="image/*"
          data-testid="file-input"
        />
        {isLoading && (
          <Typhograph size={20} data-testid="loading">
            Carregando...
          </Typhograph>
        )}
        <Button type="submit" name="Enviar" />
      </S.Form>
      <ToastContainer />
    </S.Container>
  );
};

export default Home;
