import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { fetchExamination } from 'services/exam';
import { IExaminationRequest, IExaminationResponse } from 'services/interfaces';
import { FormDataProps, OptionType } from './interface';


const useHome = (setValue, register, reset) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleChange = (selectedOption: OptionType | null) => {
    setSelectedOption(selectedOption);
    setValue('exam', selectedOption?.value);
  };

  const { mutate, isError, isSuccess } = useMutation<IExaminationResponse, Error, IExaminationRequest, unknown>({
    mutationFn: (params) => fetchExamination(params),
    onSuccess: () => {
      toast('✔️ Exame cadastrado com sucesso.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setIsloading(false);
      setTimeout(() => {
        navigate(`/exames`)
      }, 2000)
    },
    onError: () => {
      toast('❌ Erro ao cadastrar exame.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setIsloading(false);
    }
  });

  const options = [
    { label: 'Selecione um exame...', value: ''},
    { value: 'Exam 1', label: 'Exame 1' },
    { value: 'Exam 2', label: 'Exame 2' },
    { value: 'Exam 3', label: 'Exame 3' },
  ];

  const changeInput = (
    value: string,
    name: string,
    files?: FileList | null,
  ) => {
    if (files) {
      register(name);
      setValue(name, files);
    } else {
      register(name);
      setValue(name, value);
    }
  };

  const onSubmit = async  (data: FormDataProps, e) => {
    setIsloading(true);
    e.target.reset();

    await mutate({
      name: data.name,
      description: data.description,
      type: data.exam,
      date: new Date(data.date),
      image: data.file,
    });

  };

  const handleNextpage = () => {
    navigate(`/exames`);
  };

  return {
    selectedOption,
    setSelectedOption,
    options,
    handleChange,
    changeInput,
    onSubmit,
    handleNextpage,
    mutate,
    isError,
    isSuccess,
    isLoading,
  };
}

export default useHome;
