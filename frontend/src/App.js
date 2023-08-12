import Footer from './Components/Footer';
import Header from './Components/Header';
import Content from './Components/Content';
import styles from './styles/app.module.scss';

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;