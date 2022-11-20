import { ReactNode } from 'react'
import * as C from './styles'

interface ToggleProps {
   children: ReactNode;
   onPressedChange?: any;
   pressed?: any;
}

export function ToggleAbsence({ children, onPressedChange, pressed }: ToggleProps) {
   return (
      <C.ToggleAbsRoot
         pressed={pressed}
         onPressedChange={onPressedChange}
      >
         <C.ToggleButton>
            {children}
         </C.ToggleButton>
      </C.ToggleAbsRoot>
   )
}