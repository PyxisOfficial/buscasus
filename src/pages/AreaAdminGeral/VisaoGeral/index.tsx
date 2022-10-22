import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';

export function VisaoGeralAdmin() {
    return (
        <MenuBackground menuLinks={<MenuLinksAdmin />}>

        </MenuBackground>
    )
}