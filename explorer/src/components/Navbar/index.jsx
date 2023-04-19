import style from './Navbar.module.scss';
import NAVBAR_CONSTANTS from '../../constants/navbar';

const Nav = () => {
    return (
        <nav className={style.nav}>
            <a href={NAVBAR_CONSTANTS.ROOT_URL}>
                <img className={style.nav_img} src={NAVBAR_CONSTANTS.LOGO.src} alt={NAVBAR_CONSTANTS.LOGO.alt} />
            </a>
            <ul className={style.nav_ul}>
                {
                    NAVBAR_CONSTANTS.NAV_LINKS.map((item, index) => {
                        return <li key={index}><a href={item.href}>{item.title}</a></li>
                    })
                }
            </ul>
        </nav>
    );
}

export default Nav; 
/* 
Declaration and exporting default cannot be done in single line as multiple identifiers can be declared at a same time 
and hence export wouldn't know which identifier to export.
*/
