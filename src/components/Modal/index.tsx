import { ReactNode } from 'react';

import { Pencil, Info, Trash } from 'phosphor-react';

import * as AlertDialog from '@radix-ui/react-alert-dialog';
import * as Dialog from '@radix-ui/react-dialog'

import * as C from './styles';

interface ModalProps {
    children?: ReactNode;
    medicId?: any;
    closeModal: any;
    title: string;
    modalAction?: any;
}

function AlertModal({ children, medicId, closeModal, title, modalAction }: ModalProps) {
    return (
        <AlertDialog.Root>
            <C.AlertDialogTrigger
                asChild
                onClick={medicId}
            >
                <Trash size={38}/>
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
                            Cancelar
                        </C.AlertDialogCancel>
                        <C.AlertDialogButton onClick={modalAction}>
                            Excluir
                        </C.AlertDialogButton>
                    </C.AlertDialogFooter>
                </C.AlertDialogContent>
            </AlertDialog.Portal>
        </AlertDialog.Root>

    )
}


function EditModal({ children, medicId, closeModal, title, modalAction }: ModalProps) {
    return (
        <AlertDialog.Root>
            <C.EditDialogTrigger
                asChild
                onClick={medicId}
            >
                <Pencil size={38}/>
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

function InfoDialogModal({ children, medicId, closeModal, title}: ModalProps) {
    return (
        <Dialog.Root>
            <C.InfoDialogTrigger
                asChild
                onClick={medicId}
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

export const Modal = {
    Alert: AlertModal,
    Edit: EditModal,
    Info: InfoDialogModal
}