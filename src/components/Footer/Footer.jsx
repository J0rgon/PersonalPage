import style from './Footer.module.css';
import { Link } from 'react-router';

function Footer() {
    return (
        <footer className={style.footer}>
            <h5>
                This is indeed a footer
            </h5>
            <div className={style.socials}>
                <Link>
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link>
                    <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link>
                    <i className="fa-brands fa-github"></i>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;