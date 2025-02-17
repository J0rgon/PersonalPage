
import style from './Header.module.css';

function Header() {
  return (
    <header classname={style.mainHeader}>
    <a href="#">Beginning</a>
    <a href="#">Past</a>
    <a href="#">Present</a>
    <a href="#">Future?</a>    
  </header>
  );
};

export default Header;
