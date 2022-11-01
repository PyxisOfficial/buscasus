import { ReactNode } from 'react';

import * as C from './styles';

interface ToastProps {
   children: ReactNode;
   onOpenChange?: any;
}

function ToastRoot({ children, onOpenChange }: ToastProps) {
   return (
      <C.ToastBg
         isToastOpened={onOpenChange}
      >
         {children}
      </C.ToastBg>
   )
}

function ToastTitle({ children }: ToastProps) {
   return (
      <C.ToastTitle>
         {children}
      </C.ToastTitle>
   )
}

function ToastDescription({ children }: ToastProps) {
   return (
      <C.ToastDescription>
         {children}
      </C.ToastDescription>
   )
}

export const Toast = {
   Root: ToastRoot,
   Title: ToastTitle,
   Description: ToastDescription
}