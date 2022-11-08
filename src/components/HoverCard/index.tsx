import { ReactNode } from 'react';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as C from './styles'

// function HoverCard() {
//    return (
//    <HoverCardPrimitive.Root>
//      <HoverCardPrimitive.Trigger />
//      <HoverCardPrimitive.Portal>
//        <HoverCardPrimitive.Content>
//          <HoverCardPrimitive.Arrow />
//        </HoverCardPrimitive.Content>
//      </HoverCardPrimitive.Portal>
//    </HoverCardPrimitive.Root>
//    )
// }

interface HoverCardRootProps {
   children: ReactNode;
}

function HoverCardRoot({children}: HoverCardRootProps) {
   return (
      <HoverCardPrimitive.Root>
         {children}
      </HoverCardPrimitive.Root>
   )
}

interface HoverCardTriggerProps {
   children: ReactNode;
}

function HoverCardTrigger({children}: HoverCardTriggerProps) {
   return (
      <C.HoverCardTrigger>
         {children}
      </C.HoverCardTrigger>
   )
}

interface HoverCardContentProps {
   children: ReactNode;
}

function HoverCardContent({children}: HoverCardContentProps) {
   return (
      <HoverCardPrimitive.Portal>
      <C.HoverCardContent>
        <C.HoverCardArrow />
        {children}
      </C.HoverCardContent>
    </HoverCardPrimitive.Portal>
   )
}

export const HoverCard = {
   Root: HoverCardRoot,
   Trigger: HoverCardTrigger,
   Content: HoverCardContent
}