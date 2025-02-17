
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.headerContainer}>
      <h1 className={style.title}>
        Hello my gravy babies!
      </h1>
      <header className={style.mainHeader}>
        <a href="#beginning">Beginning</a>
        <a href="#">Past</a>
        <a href="#">Present</a>
        <a href="#">Future?</a>    
      </header>
      </div>
  );
};

export default Header;
