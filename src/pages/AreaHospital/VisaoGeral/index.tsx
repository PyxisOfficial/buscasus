import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';

export function VisaoGeralHospital() {
    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>

        </MenuBackground>
    )
}