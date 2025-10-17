'use client';

import { Button } from '@app/components/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from '@app/components/dialog/alert';
import {
  InfoDialog,
  InfoDialogContent,
  InfoDialogTitle,
} from '@app/components/dialog/info';
import { noop } from '@app/helpers/noop';
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type BaseModalProps = {
  title?: ReactNode;
  body: ReactNode;
  className?: string;
  confirm?: {
    text: string;
    onClick: () => void;
  };
};

type InfoModalProps = BaseModalProps & {
  showClose?: boolean;
  type?: 'info';
};

type AlertModalProps = BaseModalProps & {
  type?: 'alert';
};

type ModalProps = OneOf<[InfoModalProps, AlertModalProps]>;

const initModalProps: ModalProps & {
  isOpen: boolean;
} = {
  isOpen: false,
  body: null,
};

type IModalContext = {
  /**
   * @description Open modal with given props
   * @param props Modal props
   * @example openModal({ title: 'Modal title', body: 'Modal body' });
   */
  openModal: (props: ModalProps) => void;
  closeModal: () => void;
};

const ModalContext = createContext<IModalContext>({
  closeModal: noop,
  openModal: noop,
});

export const ModalProvider: FCC = ({ children }) => {
  const [modalProps, setModalProps] = useState(initModalProps);

  const onOpenChange = useCallback<IModalContext['closeModal']>(
    (isOpen = false) => {
      if (!isOpen) {
        setModalProps((props) => ({
          ...props,
          isOpen,
        }));
        // timeout bcs of closing animation
        setTimeout(() => setModalProps(initModalProps), 300);
      }
    },
    [],
  );

  const openModal = useCallback<IModalContext['openModal']>(
    (props) =>
      setModalProps({
        ...props,
        isOpen: true,
      }),
    [setModalProps],
  );

  return (
    <ModalContext.Provider
      value={useMemo<IModalContext>(
        () => ({
          closeModal: onOpenChange,
          openModal,
        }),
        [onOpenChange, openModal],
      )}
    >
      {modalProps.type === 'alert' ? (
        <AlertDialog open={modalProps.isOpen} onOpenChange={onOpenChange}>
          <AlertDialogContent className={modalProps.className}>
            {modalProps.title && (
              <AlertDialogTitle>{modalProps.title}</AlertDialogTitle>
            )}
            {modalProps.body}
            {modalProps.confirm && (
              <Button onClick={modalProps.confirm.onClick}>
                {modalProps.confirm.text}
              </Button>
            )}
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <InfoDialog open={modalProps.isOpen} onOpenChange={onOpenChange}>
          <InfoDialogContent
            showClose={modalProps.showClose}
            className={modalProps.className}
          >
            {modalProps.title && (
              <InfoDialogTitle>{modalProps.title}</InfoDialogTitle>
            )}
            {modalProps.body}
            {modalProps.confirm && (
              <Button onClick={modalProps.confirm.onClick}>
                {modalProps.confirm.text}
              </Button>
            )}
          </InfoDialogContent>
        </InfoDialog>
      )}

      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext<IModalContext>(ModalContext);
