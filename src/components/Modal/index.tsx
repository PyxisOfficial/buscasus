import { ReactNode } from 'react';

import { Pencil, Info, Trash } from 'phosphor-react';

import * as AlertDialog from '@radix-ui/react-alert-dialog';
import * as Dialog from '@radix-ui/react-dialog'

import * as C from './styles';

interface ModalProps {
    children?: ReactNode;
    itemId?: any;
    closeModal?: any;
    title: string;
    modalAction?: any;
    cancel?: string;
    submit?: string;
}

function AlertModal({ children, itemId, closeModal, title, modalAction, cancel, submit }: ModalProps) {
    return (
        <AlertDialog.Root>
            <C.AlertDialogTrigger
                asChild
                onClick={itemId}
            >
                <Trash size={38} />
            </C.AlertDialogTrigger>
            <AlertDialog.Portal>
                <C.AlertDialogOverlay />
                <C.AlertDialogContent>
                    <C.DialogHeader>
                        <AlertDialog.Cancel asChild>
                            <C.Close
                                size={20}
                                onClick={closeModal}
                            />
                        </AlertDialog.Cancel>
                        <C.AlertDialogTitle>
                            {title}
                        </C.AlertDialogTitle>
                    </C.DialogHeader>
                    <C.AlertDialogDescription>
                        {children}
                    </C.AlertDialogDescription>
                    <C.AlertDialogFooter>
                        <C.AlertDialogCancel>
                            {cancel}
                        </C.AlertDialogCancel>
                        <C.AlertDialogButton onClick={modalAction}>
                            {submit}
                        </C.AlertDialogButton>
                    </C.AlertDialogFooter>
                </C.AlertDialogContent>
            </AlertDialog.Portal>
        </AlertDialog.Root>

    )
}


function EditModal({ children, itemId, closeModal, title, modalAction }: ModalProps) {
    return (
        <AlertDialog.Root>
            <C.EditDialogTrigger
                asChild
                onClick={itemId}
            >
                <Pencil size={38} />
            </C.EditDialogTrigger>
            <AlertDialog.Portal>
                <C.AlertDialogOverlay />
                <C.AlertDialogContent>
                    <C.DialogHeader>
                        <AlertDialog.Cancel asChild>
                            <C.Close
                                size={20}
                                onClick={closeModal}
                            />
                        </AlertDialog.Cancel>
                        <C.AlertDialogTitle>
                            {title}
                        </C.AlertDialogTitle>
                    </C.DialogHeader>
                    <C.AlertDialogDescription>
                        {children}
                    </C.AlertDialogDescription>
                </C.AlertDialogContent>
            </AlertDialog.Portal>
        </AlertDialog.Root>

    )
}

function InfoDialogModal({ children, itemId, closeModal, title }: ModalProps) {
    return (
        <Dialog.Root>
            <C.InfoDialogTrigger
                asChild
                onClick={itemId}
            >
                <Info size={38} />
            </C.InfoDialogTrigger>
            <Dialog.Portal>
                <C.DialogOverlay />
                <C.DialogContent>
                    <C.DialogHeader>
                        <Dialog.Close asChild>
                            <C.Close
                                size={20}
                                onClick={closeModal}
                            />
                        </Dialog.Close>
                        <C.DialogTitle>
                            {title}
                        </C.DialogTitle>
                    </C.DialogHeader>
                    <C.DialogDescription>
                        {children}
                    </C.DialogDescription>
                </C.DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

function LogoutModal({ children, itemId, closeModal, title, modalAction }: ModalProps) {
    return (
        <AlertDialog.Root>
            <C.LogoutDialogTrigger
                asChild
                onClick={itemId}
            >
                <span>Sair</span>
            </C.LogoutDialogTrigger>
            <AlertDialog.Portal>
                <C.AlertDialogOverlay />
                <C.AlertDialogContent>
                    <C.DialogHeader>
                        <AlertDialog.Cancel asChild>
                            <C.Close
                                size={20}
                                onClick={closeModal}
                            />
                        </AlertDialog.Cancel>
                        <C.AlertDialogTitle>
                            {title}
                        </C.AlertDialogTitle>
                    </C.DialogHeader>
                    <C.AlertDialogDescription>
                        {children}
                    </C.AlertDialogDescription>
                </C.AlertDialogContent>
            </AlertDialog.Portal>
        </AlertDialog.Root>

    )
}

export const Modal = {
    Alert: AlertModal,
    Edit: EditModal,
    Info: InfoDialogModal,
    Logout: LogoutModal
}