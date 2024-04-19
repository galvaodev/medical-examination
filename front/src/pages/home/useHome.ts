import { useState } from 'react';
import { OptionType } from './interface';

const useHome = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleChange = (selectedOption: OptionType | null) => {
    setSelectedOption(selectedOption);
  };

  const changeInput = (e: string) => {
    console.log(e);
  };


  const options = [
    { value: 'Exam 1', label: 'Exame 1' },
    { value: 'Exam 2', label: 'Exame 2' },
    { value: 'Exam 3', label: 'Exame 3' },
  ];
  return {
    selectedOption,
    setSelectedOption,
    options,
    handleChange,
    changeInput
  };
}

export default useHome;
