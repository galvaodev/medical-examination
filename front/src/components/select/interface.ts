
export interface OptionType {
  label: string;
  value: string;
}


export interface ISelectProps {
  options: OptionType[];
  handleChange: (selectedOption: OptionType | null) => void;
}
