import { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react"
import * as C from './styles'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
   children: ReactNode;
}

export function Label({children, ...props}: LabelProps) {
   return (
      <C.Label {...props}>
         {children}
      </C.Label>
   )
}