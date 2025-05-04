import { PropsWithChildren } from "react";
import * as S from "./Modal.styled";
import CloseIcon from "@assets/close.svg";
import useOutsideClickRef from "../../hooks/useOutsideClickRef";
import useKeyDown from "@/hooks/useKeyDown";

export type ModalPositionType = "center" | "bottom";
interface ModalProps {
  title: string;
  onRequestClose: () => void;
  position?: ModalPositionType;
}

function Modal({
  title,
  onRequestClose,
  children,
  position = "bottom",
}: PropsWithChildren<ModalProps>) {
  const modalRef = useOutsideClickRef<HTMLDivElement>(() => onRequestClose());
  useKeyDown({ keys: ["Escape"], callback: () => onRequestClose() });

  return (
    <S.Backdrop>
      <S.Modal position={position} ref={modalRef}>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          <S.CloseButton type="button" onClick={onRequestClose}>
            <img src={CloseIcon} alt="닫기 버튼" />
          </S.CloseButton>
        </S.ModalHeader>
        {children}
      </S.Modal>
    </S.Backdrop>
  );
}

export default Modal;
