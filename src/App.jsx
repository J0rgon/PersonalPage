
import style from './App.module.css';
import Content from './components/Content/Content.jsx';
import Header from './components/Header/Header.jsx';
import Title from './components/Title/Title.jsx';
import face from './assets/myFace.jpg';
import { beginning } from '../contentStrings.js';
import Footer from './components/Footer/Footer.jsx';

function App({section}) {

  return (
    <>
      <main className={style.mainContent}>
        <Header />
        {section}
      </main>
      <Footer />
    </>
  )
}

export default App
