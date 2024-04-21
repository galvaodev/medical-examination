export interface IModalProps {
  isOpen?: boolean;
  closeModal?: () => void;
  children: React.ReactNode;
}
