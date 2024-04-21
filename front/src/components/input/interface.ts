export type inputProps = {
  error?: boolean;
  label?: string;
  mask?: string;
  onChange: (value: string, name: string, files?: FileList | null) => void;
  value?: string;
  type?: string;
  accept?: string;
  name?: string;
};
