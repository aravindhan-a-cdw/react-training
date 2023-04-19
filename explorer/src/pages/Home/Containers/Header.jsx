import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import styles from './Header.module.css';
import { fetchData } from '../../../services/dataService';
import { useEffect, useState } from 'react';
import HOME_CONSTANTS from '../../../constants/home';


const Header = ({className}) => {
    // States
    const [cities, setCities] = useState([]);

    // Set state by getting data from api
    useEffect(() => {        
        fetchData('').then(data => setCities(data.map(details => details.city)));
    }, []);

    console.log("Rendering Header");
    // Return the element to render
    return (
        <header className={`${styles.header_container} ${className}`}>
            <div className={styles.text_container}>
                <h3 className={`primary-text-light uppercase`}>{HOME_CONSTANTS.HEADER.WELCOME}</h3>
                <h2 className={`primary-text ${styles.description}`}>
                    {HOME_CONSTANTS.HEADER.SUB_HEADING_PART_1}
                    <span className='primary-text uppercase'>
                        {HOME_CONSTANTS.HEADER.SUB_HEADING_PART_2}
                    </span>
                </h2>
                <form>
                    <Dropdown options={cities} className={styles.dropdown} borderColor='#000' />
                    <Button className={styles.explore} text={HOME_CONSTANTS.HEADER.BUTTON_TEXT} />
                </form>
            </div>
            <div className={`${styles.image_container}`}>
            </div>
        </header>
    );
}

export default Header;
