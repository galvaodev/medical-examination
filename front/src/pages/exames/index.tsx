import Button from 'components/button';
import Header from 'components/header';
import ModalComponent from 'components/modal';
import Typhograph from 'components/typhograph';
import moment from 'moment';
import React from 'react';
import { FaBookMedical } from 'react-icons/fa';
import * as S from './styles';
import useExam from './useExam';

const Exam: React.FC = () => {
  const { handleNextpage, data, open, setOpen, imagem, setImagem } = useExam();

  return (
    <S.Container>
      <Header />
      <S.Information>
        <Typhograph size={30}>
          <FaBookMedical />
          Lista de Exames
        </Typhograph>
        <Button type="button" name="Cadastrar Exame" onClick={handleNextpage} />
      </S.Information>

      <S.Body>
        {data && data?.length > 0 ? (
          <>
            <S.Header>
              <S.Thumbnail>Imagem</S.Thumbnail>
              <S.Name>Nome</S.Name>
              <S.Exam>Exame</S.Exam>
              <S.Date>Data</S.Date>
              <S.Description>Descrição</S.Description>
            </S.Header>
            {data?.map((item) => (
              <S.Card key={item._id}>
                <S.Thumbnail>
                  <img
                    src={item.image}
                    alt={item.name}
                    onClick={() => {
                      setImagem(item.image);
                      setOpen(true);
                    }}
                  />
                </S.Thumbnail>
                <S.Name>{item.name}</S.Name>
                <S.Exam>{item.type}</S.Exam>
                <S.Date>{moment(item.date).format('DD/MM/YYYY')}</S.Date>
                <S.Description>{item.description}</S.Description>
              </S.Card>
            ))}
          </>
        ) : (
          <S.NotFound>
            <Typhograph size={20}>Nenhum exame cadastrado</Typhograph>
          </S.NotFound>
        )}
      </S.Body>

      <ModalComponent isOpen={open} closeModal={() => setOpen(false)}>
        <img src={imagem} alt="Imagem" />
      </ModalComponent>
    </S.Container>
  );
};

export default Exam;
