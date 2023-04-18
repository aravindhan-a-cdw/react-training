import style from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <img className={style.nav_img} src="images/logo.png" alt="Explorer Logo" />
            <ul className={style.nav_ul}>
                <li>Hotels</li>
                <li>Bike Rentals</li>
                <li>Restaurants</li>
            </ul>
        </nav>
    );
}

export default Nav; 
/* 
Declaration and exporting default cannot be done in single line as multiple identifiers can be declared at a same time 
and hence export wouldn't know which identifier to export.
*/
