import { ReactNode } from 'react';
import *  as ToastPrimitive from '@radix-ui/react-toast'

interface ToastProps {
   children: ReactNode;
}

function ToastSucess({children}: ToastProps) {
   return (
      <ToastPrimitive.Root>
         <ToastPrimitive.Description>
            {children}
         </ToastPrimitive.Description>
      </ToastPrimitive.Root>
   )
}

function ToastFail({children}: ToastProps) {
   return (
      <ToastPrimitive.Root>
         <ToastPrimitive.Description>
            {children}
         </ToastPrimitive.Description>
      </ToastPrimitive.Root>
   )
}

const Toast = {
   Sucess: ToastSucess,
   Fail: ToastFail
}
