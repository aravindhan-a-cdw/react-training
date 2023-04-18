import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import styles from './Header.module.css';
import places from '../../assets/data/places.json';


const Header = ({className}) => {
    const cities = places.map((details) => details.city);
    return (
        <header className={`${styles.header_container} ${className}`}>
            <div className={styles.text_container}>
                <h3 className={`primary-text-light uppercase`}>Welcome to Explorer</h3>
                <h2 className={`primary-text ${styles.description}`}>Your Adventure Travel Expert in the <span className='primary-text uppercase'>South</span></h2>
                <form>
                    <Dropdown options={cities} className={styles.dropdown} borderColor='#000' />
                    <Button className={styles.explore} text="Explore" />
                </form>
            </div>
            <div className={`${styles.image_container}`}>
            </div>
        </header>
    );
}

export default Header;
