import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export const AlertDialogContent = styled(AlertDialog.Content)`
    position: fixed;
    width: 200px;
    height: 200px;
    left: 50%;
    top: 50%;
    background-color: lightgray;
    transform: translate(-50%, -50%);
`

export const AlertDialogTrigger = styled(AlertDialog.Trigger)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4px 6px 4px 6px;
    border: 1px solid #e94a4f;
    background-color: #e94a4f;
    border-radius: 8px;
    color: #fff;
    transition: all .4s;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #e94a4f;
    }
`
