import Button from './Button';
import Dropdown from './Dropdown';
import styles from './Footer.module.css';
import places from '../assets/data/places.json';
import { useEffect, useState } from 'react';


const Footer = ({className}) => {
    const cities = places.map((details) => details.city);

    const [homeTown, setHomeTown] = useState('');
    const [destination, setDestination] = useState('');
    const [destinationCities, setDestinationCities] = useState(cities);

    useEffect(() => {
        setDestinationCities(cities?.filter((value) => value !== homeTown));
        // eslint-disable-next-line
    }, [homeTown]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // TODO: Show the submission message to user!
        return false;
    }

    return (
        <footer className={`${styles.footer_container} ${className}`}>
            {/* Contact form title */}
            <h3 className={`primary-text ${styles.heading}`}>Contact Us</h3>
            <span className={`primary-text-light ${styles.sub_heading}`}>Our Sales Team will reach out to you ASAP!</span>

            <form onSubmit={handleFormSubmit}>
                {/* Contact form */}
                {/* Name label and Input */}
                <label htmlFor="name">Name</label>
                <input className={styles.input} type="text" id="name" name="name" />
                {/* Hometown label and dropdown */}
                <label htmlFor="home-town">Your Home Town</label>
                <Dropdown options={cities} onChange={setHomeTown} borderColor='#979797' id_name='home-town' />
                {/* Destination label and dropdown */}
                <label htmlFor="destination">Where would you like to go?</label>
                <Dropdown options={destinationCities} onChange={setDestination} borderColor='#979797' id_name='destination' />
                {/* Contact label and input */}
                <label htmlFor="contact">Contact Number</label>
                <input className={styles.input} type="number" id="contact" name="contact" />
                {/* Submit button */}
                <Button className={styles.submit_btn} text='Submit Interest' />
            </form>
        </footer>
    );
}

export default Footer;
