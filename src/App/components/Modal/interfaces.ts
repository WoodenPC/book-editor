export interface ModalProps {
  /** открыта ли модалка */
  isOpen?: boolean;
  /** колбэк закрытии модалки */
  onClose: () => void;
  /** текст модалки */
  text: string;
}
