import { ReactNode, useState, useCallback } from "react";

interface Props {
  el?: ReactNode;
}
const useModal = ({ el }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [modal, setModal] = useState(el);

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return { isOpen, toggle, modal, setModal };
};

export default useModal;
