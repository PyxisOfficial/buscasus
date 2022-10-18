import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import './styles.css';

export function VisaoGeralHospital() {
    return (
        <div>
            <MenuBackground menuLinks={<MenuLinksHospital />}>

            </MenuBackground>
        </div>
    )
}