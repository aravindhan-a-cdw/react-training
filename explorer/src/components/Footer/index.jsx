import Button from '../Button';
import Dropdown from '../Dropdown';
import styles from './Footer.module.css';
import { useEffect, useState } from 'react';
import {fetchData} from '../../services/dataService';
import FOOTER_CONSTANTS from '../../constants/footer';


const Footer = ({className}) => {
    // States
    const [cities, setCities] = useState([]);
    const [homeTown, setHomeTown] = useState('');
    const [destination, setDestination] = useState('');
    const [destinationCities, setDestinationCities] = useState(cities);

    // Set state by getting data from api
    useEffect(() => {        
        fetchData('').then(data => setCities(data.map(details => details.city)));
    }, []);

    useEffect(() => {
        setDestinationCities(cities?.filter((value) => value !== homeTown));
        // eslint-disable-next-line
    }, [cities, homeTown]);

    // Handlers
    // Form submit handler
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(destination);
        // TODO: Show the submission message to user!
        return false;
    }

    console.log("Rendering Footer");
    // Return the element to render
    return (
        <footer className={`${styles.footer_container} ${className}`}>
            {/* Contact form title */}
            <h3 className={`primary-text ${styles.heading}`}>{FOOTER_CONSTANTS.HEADING}</h3>
            <span className={`primary-text-light ${styles.sub_heading}`}>{FOOTER_CONSTANTS.SUB_HEADING}</span>

            <form onSubmit={handleFormSubmit}>
                {/* Contact form */}
                {/* Name label and Input */}
                <label htmlFor="name">{FOOTER_CONSTANTS.NAME}</label>
                <input className={styles.input} type="text" id="name" name="name" />
                {/* Hometown label and dropdown */}
                <label htmlFor="home-town">{FOOTER_CONSTANTS.HOME_TOWN}</label>
                <Dropdown options={cities} onChange={setHomeTown} borderColor='#979797' id_name='home-town' />
                {/* Destination label and dropdown */}
                <label htmlFor="destination">{FOOTER_CONSTANTS.DESTINATION}</label>
                <Dropdown options={destinationCities} onChange={setDestination} borderColor='#979797' id_name='destination' />
                {/* Contact label and input */}
                <label htmlFor="contact">{FOOTER_CONSTANTS.CONTACT}</label>
                <input className={styles.input} type="number" id="contact" name="contact" />
                {/* Submit button */}
                <Button className={styles.submit_btn} text={FOOTER_CONSTANTS.BUTTON_TITLE} />
            </form>
        </footer>
    );
}

export default Footer;
