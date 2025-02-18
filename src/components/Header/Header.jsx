import { Link, Navigate } from 'react-router';
import style from './Header.module.css';


function Header() {
  return (
    <div className={style.headerContainer}>
      <h1 className={style.title}>
        Hello my gravy babies!
      </h1>
      <header className={style.mainHeader}>
        <Link replace={true} to={'/'}>Beginning</Link>
        <Link replace={true} to={'/past'}>Past</Link>
        <Link replace={true} to={'/present'}>Present</Link>
        <Link replace={true} to={'/future'}>Future?</Link>  
      </header>
      </div>
  );
};

export default Header;
