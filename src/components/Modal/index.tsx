import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { X } from 'phosphor-react'
import { ReactNode } from 'react';
import * as C from './styles';

interface AlertModalProps {
    children: ReactNode;
    medicId: any;
    closeModal: any;
}

function AlertModal({ children, medicId, closeModal }: AlertModalProps) {
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
                    <AlertDialog.Title />
                    <AlertDialog.Description />
                    <AlertDialog.Cancel asChild>
                        <X
                            size={16}
                            onClick={closeModal}
                        />
                    </AlertDialog.Cancel>
                    <AlertDialog.Action />
                </C.AlertDialogContent>
            </AlertDialog.Portal>
        </AlertDialog.Root>

    )
}

function DialogModal() {

}

export const Modal = {
    Alert: AlertModal,
    Dialog: DialogModal
}