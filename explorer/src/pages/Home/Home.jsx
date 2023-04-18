import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Header from './Header';
import Destinations from './Destinations';
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <Nav />
            <Header className={styles.header} />
            <Destinations className={styles.destinations} />
            <Footer className={styles.footer_container} />
        </>
    );
}

export default Home;