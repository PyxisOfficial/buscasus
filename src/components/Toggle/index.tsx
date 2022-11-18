import { ReactNode } from 'react'
import * as C from './styles'

interface ToggleProps {
   children: ReactNode;
}

function ToggleGeneric({children}: ToggleProps) {
   return (
      <C.ToggleRoot>
         {children}
      </C.ToggleRoot>
   )
}

function ToggleAbsence({children}: ToggleProps) {
   return (
      <C.ToggleAbsRoot>
         <C.ToggleButton>
            {children}
         </C.ToggleButton>
      </C.ToggleAbsRoot>
   )
}

export const Toggle = {
   Generic: ToggleGeneric,
   Absence: ToggleAbsence
}
