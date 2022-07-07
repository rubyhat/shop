import classNames from "classnames/bind";
import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

interface ModalProps {
  children: ReactNode;
  className: string;
}

// const Modal: FC<ModalProps> = ({ children }) => {
const Modal = ({ children, className }: ModalProps) => {
  const el = useRef(document.createElement("div"));
  const modal = useRef(document.createElement("div"));

  useEffect(() => {
    const cn = classNames.bind(styles);
    const current = el.current;
    const currentModal = modal.current;
    const arr = className.split(" ");

    arr.push(cn("modal"));
    current.classList.add(cn("modal-wrap"));
    current.dataset.modal = "wrap";
    currentModal.classList.add(...arr);
    current.appendChild(currentModal);

    // We assume `modalRoot` exists with '!'
    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, [className]);

  return createPortal(children, modal.current);
};

export default Modal;
