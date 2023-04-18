import styles from './Destinations.module.css';
import places from '../../assets/data/places.json';
import Card from '../../components/Card';


const Destinations = ({className}) => {
    return (
        <main className={`${className}`}>
            <h3 className={`primary-text ${styles.title}`}>Destinations</h3>
            <h4 className={`primary-text-light ${styles.slogan}`}>Just for you. Because you and your bike are special to us!</h4>
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
