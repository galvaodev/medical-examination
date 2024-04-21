import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { fetchExaminationGet } from 'services/exam';
import { IExaminationResponse } from 'services/interfaces';

const useExam = () => {
  const [open, setOpen] = useState(false);
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();

  const handleNextpage = () => {
    navigate(`/`);
  };

  const { data, isLoading } = useQuery<IExaminationResponse[], Error>({
    queryKey: ['examination'],
    queryFn: fetchExaminationGet,
    refetchOnWindowFocus: false,
  });

  return {
    handleNextpage,
    data,
    isLoading,
    open,
    setOpen,
    imagem,
    setImagem
  }
};

export default useExam;
