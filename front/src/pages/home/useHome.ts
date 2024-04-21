import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FormData, OptionType } from './interface';



const useHome = (setValue, register) => {
  const navigate = useNavigate();


  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleChange = (selectedOption: OptionType | null) => {
    setSelectedOption(selectedOption);
    setValue('exam', selectedOption?.value);
  };

  const options = [
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

  const onSubmit = (data: FormData) => {
    console.log('Data enviada:', data);
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
    handleNextpage
  };
}

export default useHome;
