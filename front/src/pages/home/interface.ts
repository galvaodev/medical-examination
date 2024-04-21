export interface OptionType {
  label: string;
  value: string;
}

export type FormData = {
  name?: string;
  description?: string;
  exame?: string;
  date?: string;
  file?: File;
};
