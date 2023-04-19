import styles from './Destinations.module.css';
import places from '../../../assets/data/places.json';
import Card from '../../../components/Card';
import HOME_CONSTANTS from '../../../constants/home';


const Destinations = ({className}) => {
    return (
        <main className={`${className}`}>
            <h3 className={`primary-text ${styles.title}`}>{HOME_CONSTANTS.DESTINATIONS.HEADING}</h3>
            <h4 className={`primary-text-light ${styles.slogan}`}>{HOME_CONSTANTS.DESTINATIONS.SUB_HEADING}</h4>
            <div className={`${styles.cards_container}`}>
                {
                    places.map((details, index) => {
                        return (
                            <Card 
                                city={details.city} 
                                description={details.shortDescription}  
                                title={details.place}
                                image={`/images/${details.city}.png`}
                                key={index}
                            />
                        );
                    })
                }
            </div>
        </main>
    );
}

export default Destinations;
