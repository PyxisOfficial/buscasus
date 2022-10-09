import { MenuBackground } from '../../../components/MenuBackground';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import './styles.css';

export function VisaoGeralAdmin() {
    return (
        <div>
            <MenuBackground
                menuLinks={
                    <MenuLinksAdmin />
                }
            >

            </MenuBackground>
        </div>
    )
}