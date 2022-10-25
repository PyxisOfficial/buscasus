import styled, { keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { X } from 'phosphor-react'

// Alert Dialog Modal

export const AlertDialogContent = styled(AlertDialog.Content)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #FBFBFD;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0px 11px 4px rgba(0, 0, 0, 0.01), 0px 6px 4px rgba(0, 0, 0, 0.05), 0px 3px 3px rgba(0, 0, 0, 0.09), 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    transition: all .4s;
    animation: fadeIn .4s ease-in-out;

    @keyframes fadeIn {
        from {
            top: 40%;
            opacity: 0;
        }
        to {
            top: 50%;
            opacity: 1;
        }
    }
`

export const Close = styled(X)`
    cursor: pointer;
`

export const AlertDialogTrigger = styled(AlertDialog.Trigger)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2px 4px 2px 4px;
    border: 1px solid #e94a4f;
    background-color: #e94a4f;
    border-radius: 12px;
    color: #fff;
    transition: all .4s;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #e94a4f;
    }
`

export const DialogHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 12px;
    border-bottom: 1px solid #313131;
    padding-bottom: 10px;
`

export const AlertDialogTitle = styled(AlertDialog.Title)`
    font-size: 20px;
`

export const AlertDialogDescription = styled(AlertDialog.Description)`
    padding: 10px 0;
`

export const AlertDialogFooter = styled.div`
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;
`

// Dialog Modal

export const DialogContent = styled(Dialog.Content)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #FBFBFD;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0px 11px 4px rgba(0, 0, 0, 0.01), 0px 6px 4px rgba(0, 0, 0, 0.05), 0px 3px 3px rgba(0, 0, 0, 0.09), 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    transition: all .4s;
    animation: fadeIn .4s ease-in-out;

    @keyframes fadeIn {
        from {
            top: 40%;
            opacity: 0;
        }
        to {
            top: 50%;
            opacity: 1;
        }
    }
`

export const DialogTrigger = styled(Dialog.Trigger)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2px 4px 2px 4px;
    border: 1px solid #45CA99;
    background-color: #45CA99;
    border-radius: 12px;
    color: #fff;
    transition: all .4s;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #45CA99;
    }
`

export const DialogTitle = styled(Dialog.Title)`
    font-size: 20px;
`

export const DialogDescription = styled(Dialog.Description)`
    padding: 10px 0;
`