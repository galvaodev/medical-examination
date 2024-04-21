
export interface IButton {
  type: "button" | "submit" | "reset" | undefined;
  name: string;
  onClick?: () => void;
}
