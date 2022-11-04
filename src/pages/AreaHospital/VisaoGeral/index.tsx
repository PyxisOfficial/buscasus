import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { PieChart } from '../../../components/Charts';

export function VisaoGeralHospital() {
    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>

        </MenuBackground>
    )
}