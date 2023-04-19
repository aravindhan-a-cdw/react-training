import Nav from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from './Containers/Header';
import Destinations from './Containers/Destinations';
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