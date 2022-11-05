import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as C from './styles'

interface CheckboxProps {
   checkAction: any;
}

export function Checkbox({checkAction}: CheckboxProps) {
   return (
      <C.CheckboxPrimitiveRoot onCheckedChange={checkAction}>
         <CheckboxPrimitive.Indicator asChild>
            <C.Checked weight='bold'/>
         </CheckboxPrimitive.Indicator>
      </C.CheckboxPrimitiveRoot>
   )
}