import { ReactNode } from 'react';

import * as C from './styles';
import { Check } from 'phosphor-react';

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

function ToastDescription({ children }: ToastProps) {
   return (
      <C.ToastDescription>
         <Check size={20} weight='bold'/>
         {children}
      </C.ToastDescription>
   )
}

export const Toast = {
   Root: ToastRoot,
   Description: ToastDescription
}