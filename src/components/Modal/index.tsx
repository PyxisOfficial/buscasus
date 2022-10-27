import { ReactNode } from 'react';

import * as AlertDialog from '@radix-ui/react-alert-dialog';
import * as Dialog from '@radix-ui/react-dialog'

import * as C from './styles';

import { Button } from "../Button";

interface ModalProps {
    children: ReactNode;
    form?: ReactNode;
    medicId: any;
    closeModal: any;
    title: string;
    deleteMedic: any;
}

function AlertModal({ children, medicId, closeModal, title, deleteMedic }: ModalProps) {
    return (
        <AlertDialog.Root>
            <C.AlertDialogTrigger
                asChild
                onClick={medicId}
            >
                {children}
            </C.AlertDialogTrigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay />
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
                        Deseja excluir o médico selecionado?
                    </C.AlertDialogDescription>
                    <C.AlertDialogFooter>
                        <AlertDialog.Action asChild>
                            <Button.Gray
                            onClick={closeModal}
                                type='reset'
                                value='Cancelar'
                            />
                        </AlertDialog.Action>
                        <Button.Green
                            onClick={deleteMedic}
                            type='button'
                            value='Excluir'
                        />
                    </C.AlertDialogFooter>
                </C.AlertDialogContent>
            </AlertDialog.Portal>
        </AlertDialog.Root>

    )
}


function DialogModal({ children, medicId, closeModal, title, form }: ModalProps) {
    return (
        <Dialog.Root>
            <C.DialogTrigger
                asChild
                onClick={medicId}
            >
                {children}
            </C.DialogTrigger>
            <Dialog.Portal>
                <Dialog.Overlay />
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
                        {form}
                    </C.DialogDescription>
                </C.DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export const Modal = {
    Alert: AlertModal,
    Dialog: DialogModal
}