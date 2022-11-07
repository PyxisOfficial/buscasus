import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as C from './styles'

interface CheckboxProps {
   checkAction: any;
   isCheckboxChecked: any;
}

export function Checkbox({checkAction, isCheckboxChecked}: CheckboxProps) {
   return (
      <C.CheckboxPrimitiveRoot checked={isCheckboxChecked} onCheckedChange={checkAction}>
         <CheckboxPrimitive.Indicator asChild>
            <C.Checked weight='bold'/>
         </CheckboxPrimitive.Indicator>
      </C.CheckboxPrimitiveRoot>
   )
}