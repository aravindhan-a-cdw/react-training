import Button from '../Button';
import styles from './Card.module.scss';
import { CARD_CONSTANTS } from '../../constants/components';

/*
 * Card component to show the image, city, title and description in an article tag
 */

const Card = ({ image, title, city, description }) => {
    // TODO: Implement handler for buttons
    return (
        <article className={styles.article}>
            <img className={styles.article_image} src={image} alt={city} />
            <span className={styles.article_title}>{title}</span>
            <span className={styles.article_city}>{city}</span>
            <p className={styles.article_description}>{description}</p>
            <Button className={styles.button} text={CARD_CONSTANTS.BUTTON_READ_MORE} />
        </article>
    );
}

export default Card;
