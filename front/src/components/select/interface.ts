
export interface OptionType {
  label: string;
  value: string;
}


export interface ISelectProps {
  options: OptionType[];
  error?: string;
  ref?: any;
  handleChange: (selectedOption: OptionType | null) => void;
}
