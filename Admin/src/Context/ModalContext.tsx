import { DynamicModal } from "../components/utils/DynamicModal";
import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
  setModalContent: (e: ReactNode | null) => void;
  setModalShow: (e: boolean) => void;
  setModalTitle: (e: string) => void;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export const useModal = () => {
  const { setModalContent, setModalShow, setModalTitle } =
    useContext(ModalContext);
  return { setModalContent, setModalShow, setModalTitle };
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [modalTitle, setModalTitle] = useState<string>("");

  const modalClose = () => {
    setModalTitle("");
    setModalContent(null);
    setModalShow(false);
  };
  return (
    <ModalContext.Provider
      value={{
        setModalShow,
        setModalContent,
        setModalTitle,
      }}
    >
      {children}
      <DynamicModal
        content={modalContent}
        show={modalShow}
        handleClose={modalClose}
        title={modalTitle}
      />
    </ModalContext.Provider>
  );
};
