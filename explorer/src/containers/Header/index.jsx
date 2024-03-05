import styles from './styles.module.css';


const Header = () => {
    return (
        <header>
            <a href={NAVBAR_CONSTANTS.ROOT_URL}>
                <img className={style.nav_img} src={NAVBAR_CONSTANTS.LOGO.src} alt={NAVBAR_CONSTANTS.LOGO.alt} />
            </a>
        </header>
    );
};


export default Header;
